import { GetKR, GetOKR, GetUser, GetUserInfo } from '../apis/apiGET';
import DashOKR from '../components/dashboard/DashOKR';
import DashTodo from '../components/dashboard/DashToDo';
import Tutorial from '../components/dashboard/Tutorial';
import DashBoardCalendar from '../components/dashboard/calendar/Calendar';
import Loading from '../components/global/Loading';
import Navibar from '../components/global/Navibar';
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
import {
  OkrContainer,
  StWrap,
  StWrapBackground,
} from '../styles/mainpage.styled';
import { StNavi } from '../styles/tododetail.styled';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Mainpage() {
  const navigate = useNavigate();

  //  accesstoken 디코딩
  const [userInfo, setUserInfo] = useRecoilState(userDetail);
  // 지울 가능성 있음
  const [info, setInfo] = useRecoilState(todoDateInfo);
  // console.log('info :', info);
  // 지울 가능성 있음
  const [myInfo, setMyInfo] = useRecoilState(myTodo);
  // console.log('myInfo :', myInfo);

  // 유저 id 상태관리
  const [uid, setUid] = useRecoilState(userId);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accesstoken')
  );

  useEffect(() => {
    if (localStorage.getItem('accesstoken')) {
      const decodeToken = jwt_decode(accessToken);
      const extractedUid = decodeToken.userId;
      setUid(() => extractedUid);
    } else {
      navigate('/signin');
    }
  }, [localStorage.getItem('accesstoken')]);

  //userInfo
  const { userinfo, isLoading } = useQuery(
    ['userInfo'],
    () => GetUserInfo(uid),
    {
      enabled: !!uid,
      onSuccess: data => {
        setUserInfo(data);
        // sessionStorage.setItem('userId', data.userId);
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

  // const setTeamMemberAtom = useSetRecoilState(teamMemberAtom);

  // const { data: getMember } = useQuery(['MEMBER'], GetUser, {
  //   onSuccess: response => {
  //     console.log(response);
  //     setTeamMemberAtom(response);
  //   },
  //   onError: response => {},
  // });

  // const [count, setCount] = useRecoilState(myChange);
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
      // setCount(count + 1);
    },
  });

  const now = new Date();
  let today = '';
  if (now.getMonth() + 1 < 10 && now.getDate() < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-0${now.getDate()}`;
    sessionStorage.setItem('targetDate', today);
  } else if (now.getDate() < 10) {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-0${now.getDate()}`;
    sessionStorage.setItem('targetDate', today);
  } else if (now.getMonth() + 1 < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    sessionStorage.setItem('targetDate', today);
  } else {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    sessionStorage.setItem('targetDate', today);
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <StWrapBackground>
      <StWrap>
        {userInfo?.firstLogin === true ? (
          <Portal>
            <Tutorial />
          </Portal>
        ) : (
          <main>
            <OkrContainer>
              <DashOKR />
              <DashTodo todayFormat={today} />
            </OkrContainer>
            <DashBoardCalendar />
          </main>
        )}
      </StWrap>
    </StWrapBackground>
  );
}
