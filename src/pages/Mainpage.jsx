import { GetKR, GetOKR, GetUser, GetUserInfo } from '../apis/apiGET';
import DashOKR from '../components/dashboard/DashOKR';
import DashTodo from '../components/dashboard/DashToDo';
import Menu from '../components/dashboard/Menu';
import Tutorial from '../components/dashboard/Tutorial';
import DashBoardCalendar from '../components/dashboard/calendar/Calendar';
import Portal from '../components/global/globalModal/Potal';
import {
  getOKRData,
  krDataAtom,
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
  const { userinfo } = useQuery(['userInfo'], () => GetUserInfo(uid), {
    enabled: !!uid,
    onSuccess: data => {
      // console.log('성공');
      // console.log(data);
      setUserInfo(data);
      sessionStorage.setItem('userId', data.userId);
      setUid(data.userId);
      setInfo({ ...info, teamMembers: [uid] });
    },
  });

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
    },
  });

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
              <DashTodo />
            </OkrContainer>
            <DashBoardCalendar />
          </main>
        </>
      )}
    </StWrap>
  );
}
