import React, { useEffect, useState } from 'react';
import Eye from '../../assets/eye.png';
import CloseEye from '../../assets/closedEye.png';
import { OnChange } from '../global/onChange';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { SignIn } from '../../apis/apiPOST';
import {
  MainHeader,
  ArticleHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  HelpBox,
  SignWrap,
} from '../../styles/sign.styled';

const Test = () => {
  const navigate = useNavigate();
  // 눈 아이콘
  const [pwEyeOpen, setPwEyeOpen] = useState(false);
  const eyeState = () => {
    setPwEyeOpen(!pwEyeOpen);
  };

  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  // 유효성 검사
  const [emailValidation, setemailValidation] = useState(false);
  const [passwordValildation, setPasswordValidation] = useState(false);

  // 정규식
  const email = userInfo.email;
  const regemail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pw = userInfo.password;
  let regpw =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

  // 에러메시지
  const [emailMessage, setEmailMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');

  useEffect(() => {
    if (email === '') {
      setEmailMessage('이메일을 입력해주세요.');
      setemailValidation(false);
    } else if (regemail.test(email) === false) {
      setEmailMessage('이메일 양식으로 입력해주세요.');
      setemailValidation(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요');
      setemailValidation(true);
    }
  }, [email]);

  useEffect(() => {
    if (pw === '') {
      setPwMessage('비밀번호를 입력해주세요.');
      setPasswordValidation(false);
    } else if (regpw.test(pw) === false) {
      setPwMessage(
        '비밀번호를 8자리 이상 12자리 이하, 숫자/대소문자/특수문자를 포함하여 입력해주세요.'
      );
      setPasswordValidation(false);
    } else {
      setPwMessage('올바른 비밀번호 형식이에요');
      setPasswordValidation(true);
    }
  }, [pw]);

  //버튼 상태
  const [btnState, setBtnState] = useState(false);
  useEffect(() => {
    if (emailValidation && passwordValildation) {
      setBtnState(true);
    }
  }, [emailValidation, passwordValildation]);

  const [signValidation, setSignValidation] = useState('');
  const { mutate: signInMutate } = useMutation(SignIn, {
    onSuccess: response => {
      console.log(response);
      localStorage.setItem('accesstoken', response.accessToken);
      navigate('/mainpage');
    },
    onError: () => {
      setSignValidation('아이디 또는 비밀번호가 올바르지 않습니다.');
      alert(`${signValidation}`);
    },
  });

  return (
    <SignWrap>
      <MainHeader>로그인</MainHeader>
      <ArticleHeader>
        <div className='div1' />
        이메일
      </ArticleHeader>
      <InputBox>
        <EmailInput
          type='text'
          name='email'
          placeholder='이메일을 입력하세요'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
        />
      </InputBox>
      <ArticleHeader>
        {emailValidation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {emailMessage}
          </p>
        )}
      </ArticleHeader>
      <ArticleHeader>
        <div className='div2' />
        비밀번호
      </ArticleHeader>

      <InputBox>
        <EmailInput
          type={pwEyeOpen ? 'text' : 'password'}
          name='password'
          placeholder='비밀번호를 입력하세요'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
        />
        {pwEyeOpen ? (
          <PwEye src={Eye} onClick={eyeState} />
        ) : (
          <PwEye src={CloseEye} onClick={eyeState} />
        )}
      </InputBox>
      <ArticleHeader>
        {passwordValildation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {pwMessage}
          </p>
        )}
      </ArticleHeader>

      <LoginBtn
        btnState={btnState}
        disabled={!btnState}
        onClick={() => {
          signInMutate(userInfo);
        }}>
        로그인 하기
      </LoginBtn>
      <HelpBox>
        <span>비밀번호 찾기</span>
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </HelpBox>
    </SignWrap>
  );
};

export default Test;
