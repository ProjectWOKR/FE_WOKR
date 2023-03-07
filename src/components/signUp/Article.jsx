import React from 'react';
import { useState, useEffect } from 'react';
import {
  MainHeader,
  ArticleHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  Dropdown,
  SignUpBtnMargin,
} from '../../styles/sign.styled';
import Eye from '../../sources/passwordEye.png';
import { useNavigate } from 'react-router-dom';
import { onPwEyeState } from '../global/pwEyeState';
import { OnChange } from '../global/onChange';

export default function Article() {
  const navigate = useNavigate();
  const [pwEyeState, setPwEyeState] = useState('');
  const [pwCheckEyeState, setPwCheckEyeState] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    team: '',
    position: '',
  });
  const [emailValidation, setemailValidation] = useState('');
  const [passwordValildation, setPasswordValidation] = useState('');
  const [pwCheckValidation, setPwCheckValidation] = useState('');
  const [btnState, setBtnState] = useState(false);
  const [pwCheck, setPwCheck] = useState('');

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

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    if (userInfo.password !== pwCheck && passwordValildation === '') {
      setPwCheckValidation('비밀번호를 올바르게 입력해주세요.');
    } else {
      setPwCheckValidation('');
    }
  }, [userInfo, pwCheck, passwordValildation]);

  // 버튼 상태 변경
  useEffect(() => {
    if (
      emailValidation === '' &&
      passwordValildation === '' &&
      pwCheckValidation === ''
    ) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [emailValidation, passwordValildation, pwCheckValidation]);

  const OnChangeOptionValue = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onChangePwCheck = event => {
    setPwCheck(event.target.value);
  };

  return (
    <>
      <MainHeader>회원가입</MainHeader>
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
      <ArticleHeader>
        <div className='div2' />
        비밀번호 확인
      </ArticleHeader>
      <InputBox>
        <EmailInput
          type={pwCheckEyeState}
          onChange={event => {
            onChangePwCheck(event);
          }}
          placeholder='비밀번호를 입력하세요'
        />
        <PwEye
          src={Eye}
          onClick={() => {
            onPwEyeState(pwCheckEyeState, setPwCheckEyeState);
          }}
        />
      </InputBox>
      <ArticleHeader>
        <p className='p1'>{pwCheckValidation}</p>
      </ArticleHeader>
      <ArticleHeader>
        <div className='div3' />
        이름
      </ArticleHeader>
      <InputBox>
        <EmailInput
          name='name'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
          placeholder='이름를 입력하세요'
        />
      </InputBox>
      <ArticleHeader>
        <div className='div2' />
        회사명
      </ArticleHeader>
      <InputBox>
        <Dropdown
          name='company'
          onChange={event => {
            OnChangeOptionValue(event, 'company');
          }}>
          <option value=''>회사명을 선택하세요</option>
          <option value='A회사'>A회사</option>
          <option value='B회사'>B회사</option>
        </Dropdown>
      </InputBox>
      <ArticleHeader>
        <div className='div2' />팀
      </ArticleHeader>
      <InputBox>
        <Dropdown
          name='team'
          onChange={event => {
            OnChangeOptionValue(event, 'company');
          }}>
          <option value='1'>팀을 선택하세요</option>
          <option value='2'>기획팀</option>
          <option value='3'>개발팀</option>
          <option value='4'>인사팀</option>
        </Dropdown>
      </InputBox>
      <ArticleHeader>
        <div className='div2' />
        직급
      </ArticleHeader>
      <InputBox>
        <Dropdown
          name='position'
          onChange={event => {
            OnChangeOptionValue(event, 'company');
          }}>
          <option value='1'>직급을 선택하세요</option>
          <option value='2'>팀장</option>
          <option value='3'>팀원</option>
        </Dropdown>
      </InputBox>
      <LoginBtn
        btnState={btnState}
        disabled={!btnState}
        onClick={() => {
          navigate('/');
        }}>
        <p>회원가입</p>
      </LoginBtn>
      <SignUpBtnMargin />
    </>
  );
}
