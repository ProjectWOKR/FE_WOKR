import React from 'react';
import { useState } from 'react';
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

  const OnChangeOptionValue = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
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
        <div className='div2' />
        비밀번호 확인
      </ArticleHeader>
      <InputBox>
        <EmailInput
          type={pwCheckEyeState}
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
        onClick={() => {
          navigate('/');
        }}>
        <p>회원가입</p>
      </LoginBtn>
      <SignUpBtnMargin />
    </>
  );
}
