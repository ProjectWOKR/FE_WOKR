import { GetKR, GetOKR, GetUser, GetUserInfo } from '../apis/apiGET';
import DashOKR from '../components/dashboard/DashOKR';
import DashTodo from '../components/dashboard/DashToDo';
import Menu from '../components/dashboard/Menu';
import Tutorial from '../components/dashboard/Tutorial';
import DashBoardCalendar from '../components/dashboard/calendar/Calendar';
import Loading from '../components/global/Loading';
import Portal from '../components/global/globalModal/Potal';
import {
  getOKRData,
  krDataAtom,
  myChange,
  myTodo,
  teamMemberAtom,
  todoDateInfo,
  userDetail,
  userId,
} from '../store/store';
import { OkrContainer, StWrap } from '../styles/mainpage.styled';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Mainpage() {
  const navigate = useNavigate();

  // localStorage에 accesstoken 여부 확인(리다이렉트)
  // useEffect(() => {
  //   if (localStorage.getItem('accesstoken') === undefined) {
  //     navigate('/signin');
  //   }
  // }, []);

  //  accesstoken 디코딩
  const [userInfo, setUserInfo] = useRecoilState(userDetail);
  // console.log('userInfo :', userInfo);
  // const setUserId = useSetRecoilState(userId);

  const [info, setInfo] = useRecoilState(todoDateInfo);
  const [myInfo, setMyInfo] = useRecoilState(myTodo);
  // console.log(info);

  const [uid, setUid] = useRecoilState(userId);
  // console.log('uid :', uid);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accesstoken')
  );

  useEffect(() => {
    // console.log(localStorage.accessToken);
    // console.log(localStorage.getItem('accesstoken'));
    if (localStorage.getItem('accesstoken')) {
      // console.log('디코딩한다');
      const decodeToken = jwt_decode(accessToken);
      const extractedUid = decodeToken.userId;
      setUid(() => extractedUid);
    } else {
      // console.log('어세스토큰 없다');
      navigate('/signin');
    }
  }, [accessToken]);

  //userInfo
  const { userinfo, isLoading } = useQuery(
    ['userInfo'],
    () => GetUserInfo(uid),
    {
      enabled: !!uid,
      onSuccess: data => {
        // console.log('성공');
        // console.log(data);
        setUserInfo(data);
        sessionStorage.setItem('userId', data.userId);
        setUid(data.userId);
        setInfo({ ...info, teamMembers: [uid] });
        setMyInfo({ ...myInfo, teamMembers: [uid] });
      },
    }
  );

  //okrData
  const setOkrList = useSetRecoilState(getOKRData);
  const { getokrdata } = useQuery(['OKR'], GetOKR, {
    onSuccess: data => {
      setOkrList(data);
    },
  });

  const setTeamMemberAtom = useSetRecoilState(teamMemberAtom);

  const { data: getMember } = useQuery(['MEMBER'], GetUser, {
    onSuccess: response => {
      // console.log(response);
      setTeamMemberAtom(response);
    },
    onError: response => {},
  });

  const [count, setCount] = useRecoilState(myChange);
  const [krdata, setKrData] = useRecoilState(krDataAtom);
  // console.log(krdata);
  const { data: getKr } = useQuery(['KR'], GetKR, {
    onSuccess: response => {
      // setKrState(response);
      // console.log('response :', response);
      const filterArray = response.map(el => el.keyResultId);
      filterArray.push(0);
      sessionStorage.setItem('kr', JSON.stringify(filterArray));
      setKrData(response);
      setInfo({ ...info, KeyResultIds: filterArray });
      setMyInfo({ ...myInfo, KeyResultIds: filterArray });
      setCount(count + 1);
    },
  });

  const now = new Date();
  let today = '';
  let tomorrow;
  if (now.getMonth() + 1 < 10 && now.getDate() < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-0${now.getDate()}`;
    // tomorrow = `0${now.getMonth() + 1}월 0${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
    // setMyInfo({ ...myInfo, targetDate: today });
  } else if (now.getDate() < 10) {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-0${now.getDate()}`;
    // tomorrow = `${now.getFullYear()}-${now.getMonth() + 1}-0${
    //   now.getDate() + 1
    // }`;
    sessionStorage.setItem('targetDate', today);
    // setMyInfo({ ...myInfo, targetDate: today });
  } else if (now.getMonth() + 1 < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    // tomorrow = `0${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
    // setMyInfo({ ...myInfo, targetDate: today });
  } else {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    // tomorrow = `${now.getMonth() + 1}월 ${now.getDate() + 1}일`;
    sessionStorage.setItem('targetDate', today);
    // setMyInfo({ ...myInfo, targetDate: today });
  }

  console.log(uid);
  return (
    <StWrap>
      {userinfo?.firstLogin ? (
        <Portal>
          <Tutorial />
        </Portal>
      ) : (
        <>
          <aside>
            <Menu />
          </aside>

          <main>
            <OkrContainer>
              <DashOKR />
              <DashTodo todayFormat={today} />
            </OkrContainer>
            <DashBoardCalendar />
          </main>
        </>
      )}
    </StWrap>
  );
}
