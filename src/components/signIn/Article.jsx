import React, { useEffect } from 'react';
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
import { useMutation } from '@tanstack/react-query';
import { SignIn } from '../../apis/apiPOST';

export default function Article() {
  const navigate = useNavigate();
  const [pwEyeState, setPwEyeState] = useState('');
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [emailValidation, setemailValidation] = useState('');
  const [passwordValildation, setPasswordValidation] = useState('');
  const [btnState, setBtnState] = useState(false);
  const [signValidation, setSignValidation] = useState('');

  // 이메일 유효성 검사
  useEffect(() => {
    let whelkValidation = userInfo.email.toString().includes('@');
    let dotValidation = userInfo.email.toString().includes('.');
    if (whelkValidation === true && dotValidation === true) {
      setemailValidation('');
    } else {
      setemailValidation('@과 .을 포함한 이메일을 입력해주세요');
    }
  }, [userInfo]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    let pw = userInfo.password.toString();
    let reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;
    if (reg.test(pw) === false) {
      setPasswordValidation(
        '비밀번호를 8자리 이상 12자리 이하, 숫자/대소문자/특수문자를 포함하여 입력해주세요'
      );
      setBtnState(false);
    } else if (pw.search(/\s/) !== -1) {
      setPasswordValidation('공백없이 입력해주세요');
    } else {
      setPasswordValidation('');
    }
  }, [userInfo]);

  // 버튼 상태 변경
  useEffect(() => {
    if (emailValidation === '' && passwordValildation === '') {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [emailValidation, passwordValildation]);

  const { mutate: signInMutate } = useMutation(SignIn, {
    onSuccess: response => {
      localStorage.setItem('accesstoken', response.accessToken);
      navigate('/mainpage');
    },
    onError: () => {
      setSignValidation('아이디 또는 비밀번호가 올바르지 않습니다.');
    },
  });

  return (
    <>
      <MainHeader>로그인</MainHeader>
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
        <p className='p1'>{emailValidation}</p>
      </ArticleHeader>
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
      <ArticleHeader>
        <p className='p1'>{passwordValildation}</p>
      </ArticleHeader>
      <LoginBtn
        btnState={btnState}
        disabled={!btnState}
        onClick={() => {
          signInMutate(userInfo);
        }}>
        로그인 하기
      </LoginBtn>
      <ArticleHeader>
        <p className='p2'>{signValidation}</p>
      </ArticleHeader>
      <HelpBox>
        <span className='p1'>비밀번호 찾기</span>
        <span className='p2' onClick={() => navigate('/signup')}>
          회원가입
        </span>
      </HelpBox>
    </>
  );
}
