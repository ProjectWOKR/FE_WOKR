import React, { useEffect, useState } from 'react';
import Eye from '../../assets/eye.png';
import CloseEye from '../../assets/closedEye.png';
import { OnChange } from '../global/onChange';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SignIn } from '../../apis/apiPOST';
import ReactGA from 'react-ga4';
import {
  MainHeader,
  ArticleHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  HelpBox,
  SignWrap,
  Label,
} from '../../styles/sign.styled';
import { toast } from 'react-toastify';

const Test = () => {
  const navigate = useNavigate();
  // 눈 아이콘
  const [pwEyeOpen, setPwEyeOpen] = useState(false);
  const eyeState = () => {
    setPwEyeOpen(!pwEyeOpen);
  };

  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  // useEffect(() => {
  //   const savedFormData = JSON.parse(localStorage.getItem('userInfo'));
  //   if (savedFormData) {
  //     setUserInfo(savedFormData);
  //   }
  // }, []);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const regemail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let regpw =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;

    if (!userInfo.email.trim()) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!regemail.test(userInfo.email)) {
      errors.email = '이메일 형식이 올바르지 않습니다.';
    }
    if (!userInfo.password.trim()) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (!regpw.test(userInfo.password)) {
      errors.password =
        '비밀번호를 8자리 이상 12자리 이하, 숫자/대문자 또는 소문자/특수문자를 포함하여 입력해주세요.';
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      signInMutate(userInfo);
    } else {
      setErrors(errors);
    }
  };

  const { mutate: signInMutate } = useMutation(SignIn, {
    onSuccess: response => {
      console.log('login', response);
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: '로그인',
        });
      }
      localStorage.setItem('Id', userInfo.email);
      localStorage.setItem('accesstoken', response.accessToken);
      navigate('/mainpage');
    },
    onError: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: '로그인 실패',
        });
      }
      alert(response.response.data);
    },
  });

  return (
    <SignWrap onSubmit={handleSubmit}>
      <MainHeader>로그인</MainHeader>
      <Label>이메일</Label>
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
      {errors.email && <div className='valid'>{errors.email}</div>}

      <Label>비밀번호</Label>

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
      {errors.password && <div className='valid'>{errors.password}</div>}

      <LoginBtn type='submit'>로그인 하기</LoginBtn>
      <HelpBox>
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </HelpBox>
    </SignWrap>
  );
};

export default Test;
