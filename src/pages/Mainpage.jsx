import { GetKR, GetUserInfo } from '../apis/apiGET';
import DashBoardCalendar from '../components/dashboard/calendar/Calendar';
import DashTodo from '../components/dashboard/dashTodo/DashToDo';
import DashOKR from '../components/dashboard/okr/DashOKR';
import Loading from '../components/global/Loading';
import { krDataAtom, userDetail, userId } from '../store/store';
import {
  OkrContainer,
  StWrap,
  StWrapBackground,
} from '../styles/mainpage.styled';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Mainpage() {
  const navigate = useNavigate();

  //  accesstoken 디코딩
  const [userInfo, setUserInfo] = useRecoilState(userDetail);

  // 유저 id 상태관리
  const setUid = useSetRecoilState(userId);

  const [decodeId, setDecodeId] = useState(0);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accesstoken')
  );

  useEffect(() => {
    if (localStorage.getItem('accesstoken')) {
      const decodeToken = jwt_decode(accessToken);
      const extractedUid = decodeToken.userId;
      setDecodeId(extractedUid);
    } else {
      navigate('/signin');
    }
  }, [accessToken]);

  //userInfo
  const { userinfo, isLoading } = useQuery(
    ['userInfo'],
    () => GetUserInfo(decodeId),
    {
      enabled: !!decodeId,
      onSuccess: data => {
        setUserInfo(data);
        localStorage.setItem('userId', data.userId);
        setUid(data.userId);
      },
    }
  );

  //okrData
  const setKrData = useSetRecoilState(krDataAtom);

  const { data: getKr } = useQuery(['KR'], GetKR, {
    onSuccess: response => {
      // console.log(response);
      setKrData(response);
      // todo페이지에서 필요한 kr id
      const filterArray = response.map(el => el.keyResultId);
      filterArray.push(0);
      localStorage.setItem('kr', JSON.stringify(filterArray));
    },
  });

  // 오늘 날짜 포맷 2023-01-01
  // const setTodayFormat = useSetRecoilState(todayFormat);

  const now = new Date();
  let today = '';
  if (now.getMonth() + 1 < 10 && now.getDate() < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-0${now.getDate()}`;
    localStorage.setItem('targetDate', today);
    localStorage.setItem('today', today);
    // setTodayFormat(today);
  } else if (now.getDate() < 10) {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-0${now.getDate()}`;
    localStorage.setItem('targetDate', today);
    localStorage.setItem('today', today);
    // setTodayFormat(today);
  } else if (now.getMonth() + 1 < 10) {
    today = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    localStorage.setItem('targetDate', today);
    localStorage.setItem('today', today);
    // setTodayFormat(today);
  } else {
    today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    localStorage.setItem('targetDate', today);
    localStorage.setItem('today', today);
    // setTodayFormat(today);
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <StWrapBackground>
      <StWrap>
        {/* {userInfo?.firstLogin === true ? (
          <Portal>
            <Tutorial />
          </Portal>
        ) : ( */}
        <main>
          <OkrContainer>
            <DashOKR />
            <DashTodo todayFormat={today} />
          </OkrContainer>
          <DashBoardCalendar />
        </main>
        {/* )} */}
      </StWrap>
    </StWrapBackground>
  );
}
