import { useState, useEffect } from 'react';
import {
  MainHeader,
  ArticleHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  SignUpBtnMargin,
  SignWrap,
} from '../../styles/sign.styled';
import ReactGA from 'react-ga4';
import Eye from '../../assets/eye.png';
import CloseEye from '../../assets/closedEye.png';
import { OnChange } from '../global/onChange';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from '../../apis/apiPOST';
import TeamDropDown from '../../components/global/globaldropdown/TeamDropDown.jsx';
import TeamPosiDropDown from '../global/globaldropdown/TeamPosiDropDown';
import { trackEvent } from '../../router/RouteChangeTracker';

const Test = () => {
  const navigate = useNavigate();
  // 눈 아이콘
  const [pwEyeOpen, setPwEyeOpen] = useState(false);
  const eyeState = () => {
    setPwEyeOpen(!pwEyeOpen);
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    team: '',
    teamposition: '',
  });

  // 정규식
  const email = userInfo.email;
  const regemail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pw = userInfo.password;
  let regpw =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;
  const regname = userInfo.name.length >= 2 && userInfo.name.length < 6;

  // 유효성 검사
  const [emailValidation, setemailValidation] = useState(false);
  const [passwordValildation, setPasswordValidation] = useState(false);
  const [pwCheckValidation, setPwCheckValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [teamValidation, setTeamValidation] = useState(false);
  const [teamPosiValidation, setTeamPosiValidation] = useState(false);

  // 에러메시지
  const [emailMessage, setEmailMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [pwCheckMessage, setPwCheckMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [teamMessage, setTeamMessage] = useState('');
  const [teamPosiMessage, setTeamPosiMessage] = useState('');

  /**드롭박스 값 추출해오는 함수 */
  const OnChangeOptionValue = e => {
    console.log('dd');
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  // console.log(userInfo);

  // 이메일
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

  // 비밀번호
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

  // 비밀번호 확인
  useEffect(() => {
    if (pw !== userInfo.confirmpassword) {
      setPwCheckMessage('비밀번호가 일치하지 않습니다.');
      setPwCheckValidation(false);
    } else {
      setPwCheckMessage('비밀번호가 일치합니다.');
      setPwCheckValidation(true);
    }
  }, [pw, userInfo.confirmpassword]);

  // 이름 확인
  useEffect(() => {
    if (userInfo.name === '') {
      setNameMessage('이름을 입력해주세요.');
      setNameValidation(false);
    } else if (regname === false) {
      setNameMessage('이름은 2글자 이상, 6글자 미만으로 입력해주세요.');
      setNameValidation(false);
    } else {
      setNameMessage('이름이 작성되었습니다.');
      setNameValidation(true);
    }
  }, [userInfo.name]);

  // 팀 확인
  useEffect(() => {
    if (userInfo.team === '') {
      setTeamMessage('팀을 입력해주세요.');
      setTeamValidation(false);
    } else {
      setTeamMessage('팀이 선택되었습니다.');
      setTeamValidation(true);
    }
  }, [userInfo.team]);

  // console.log(userInfo.team);

  // 직급 확인
  useEffect(() => {
    if (userInfo.teamposition === '') {
      setTeamPosiMessage('직급을 선택해주세요.');
      setTeamPosiValidation(false);
    } else {
      setTeamPosiMessage('직급이 선택되었습니다.');
      setTeamPosiValidation(true);
    }
  }, [userInfo.teamposition]);

  //버튼 상태
  //userInfo의 값으로 확인해야함 버그 찾음
  const [btnState, setBtnState] = useState(false);
  useEffect(() => {
    if (
      emailValidation &&
      passwordValildation &&
      pwCheckValidation &&
      nameValidation &&
      teamValidation &&
      teamPosiValidation
    ) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [
    emailValidation,
    passwordValildation,
    pwCheckValidation,
    nameValidation,
    teamValidation,
    teamPosiValidation,
  ]);

  // 버튼을 눌렀을 때 이메일 중복 검사
  const [signValidation, setSignValidation] = useState('');
  const { mutate: signUpMutate } = useMutation(SignUp, {
    onSuccess: response => {
      ReactGA.event({
        category: '버튼',
        action: '회원가입',
      });
      navigate('/');
    },

    onError: response => {
      ReactGA.event({
        category: '버튼',
        action: '회원가입 실패',
      });
      setSignValidation('이미 존재하는 이메일입니다.');
      alert(response.response.data);
    },
  });

  return (
    <SignWrap>
      <MainHeader>회원가입</MainHeader>
      <ArticleHeader>이메일</ArticleHeader>
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
      <ArticleHeader>비밀번호</ArticleHeader>
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
      <ArticleHeader>비밀번호 확인</ArticleHeader>
      <InputBox>
        <EmailInput
          type={pwEyeOpen ? 'text' : 'password'}
          name='confirmpassword'
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
        {pwCheckValidation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {pwCheckMessage}
          </p>
        )}
      </ArticleHeader>
      <ArticleHeader>이름</ArticleHeader>
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
        {nameValidation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {nameMessage}
          </p>
        )}
      </ArticleHeader>
      <ArticleHeader>팀</ArticleHeader>
      {/* <TeamDropDown setUserInfo={setUserInfo} userInfo={userInfo} /> */}
      <InputBox>
        <EmailInput
          name='team'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
          placeholder='팀이름를 입력하세요'
        />
      </InputBox>
      <ArticleHeader>
        {teamValidation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {teamMessage}
          </p>
        )}
      </ArticleHeader>
      <ArticleHeader>직급</ArticleHeader>
      <TeamPosiDropDown
        // OnChangeOptionValue={OnChangeOptionValue}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
      />
      <ArticleHeader>
        {teamPosiValidation ? null : (
          <p className='p1' style={{ color: 'red' }}>
            {teamPosiMessage}
          </p>
        )}
      </ArticleHeader>
      <LoginBtn
        btnState={btnState}
        disabled={!btnState}
        onClick={() => {
          signUpMutate(userInfo);
        }}>
        회원가입
      </LoginBtn>
      <SignUpBtnMargin />
    </SignWrap>
  );
};

export default Test;
