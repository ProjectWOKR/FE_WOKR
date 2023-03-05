import React from 'react';
import { useState } from 'react';
import {
  MainHeader,
  ArticleHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  HelpBox,
} from '../../styles/sign.styled';
import Eye from '../../sources/passwordEye.png';
import { useNavigate } from 'react-router-dom';
import { onPwEyeState } from '../global/pwEyeState';
import { OnChange } from '../global/onChange';

export default function Article() {
  const navigate = useNavigate();
  const [pwEyeState, setPwEyeState] = useState('');
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  return (
    <>
      <MainHeader>로그인12345</MainHeader>
      <ArticleHeader>
        <div className='div1' />
        이메일
      </ArticleHeader>
      <InputBox>
        <EmailInput
          type='email'
          name='email'
          placeholder='이메일을 입력하세요'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
        />
      </InputBox>
      <ArticleHeader>
        <div className='div2' />
        비밀번호
      </ArticleHeader>
      <InputBox>
        <EmailInput
          type={pwEyeState}
          name='password'
          placeholder='비밀번호를 입력하세요'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
        />
        <PwEye
          src={Eye}
          onClick={() => {
            onPwEyeState(pwEyeState, setPwEyeState);
          }}
        />
      </InputBox>
      <LoginBtn
        onClick={() => {
          navigate('/mainpage');
        }}>
        로그인 하기
      </LoginBtn>
      <HelpBox>
        <span className='p1'>비밀번호 찾기</span>
        <span className='p2' onClick={() => navigate('/signup')}>
          회원가입
        </span>
      </HelpBox>
    </>
  );
}
