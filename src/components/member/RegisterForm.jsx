import { SignUp } from '../../apis/apiPOST';
import CloseEye from '../../assets/closedEye.png';
import Eye from '../../assets/eye.png';
import {
  MainHeader,
  InputBox,
  EmailInput,
  PwEye,
  LoginBtn,
  SignWrap,
  Label,
  HelpBox,
} from '../../styles/sign.styled';
import Toast from '../global/Toast';
import { OnChange } from '../global/onChange';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  // 새로고침 막기
  const preventClose = e => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

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

  const [errors, setErrors] = useState({});
  // 유효성 검사
  const validate = () => {
    let errors = {};
    const regemail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let regpw =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    const regname = userInfo.name.length >= 2 && userInfo.name.length < 6;
    if (!userInfo.email.trim()) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!regemail.test(userInfo.email)) {
      errors.email = '이메일 형식이 올바르지 않습니다.';
    }
    if (!userInfo.password.trim()) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (!regpw.test(userInfo.password)) {
      errors.password =
        '비밀번호를 8자리 이상 15자리 이하, 영문/숫자/특수문자를 포함하여 입력해주세요.';
    }
    if (userInfo.password !== userInfo.confirmpassword) {
      errors.confirmpassword = '비밀번호가 일치하지 않습니다.';
    }
    if (!userInfo.name.trim()) {
      errors.name = '이름을 입력해주세요.';
    } else if (!regname) {
      errors.name = '이름은 2글자 이상, 6글자 미만으로 입력해주세요. ';
    }
    if (!userInfo.team.trim()) {
      errors.team = '팀명을 입력해주세요.';
    } else if (userInfo.team.length < 2) {
      errors.team = '팀명은 최소 두글자 이상이에요.';
    }
    // if (!userInfo.teamposition.trim()) {
    //   errors.teamposition = '직급을 선택해주세요.';
    // }
    return errors;
  };

  const { mutate: signUpMutate } = useMutation(SignUp, {
    onSuccess: response => {
      // toast('회원가입 성공!');
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: '회원가입',
        });
      }
      alert('회원가입 성공');
      navigate('/signin');
    },

    onError: response => {
      console.log(response);
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: '회원가입 실패',
        });
      }
      // alert(response?.response.data);
      alert('실패');
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      signUpMutate(userInfo);
    } else {
      setErrors(errors);
    }
  };

  return (
    <SignWrap onSubmit={handleSubmit}>
      <MainHeader>회원가입</MainHeader>
      <Label htmlFor='email'>이메일</Label>
      <InputBox>
        <EmailInput
          id='email'
          type='text'
          name='email'
          value={userInfo.email}
          placeholder='이메일을 입력하세요'
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
        />
      </InputBox>
      {errors.email && <div className='valid'>{errors.email}</div>}

      <Label htmlFor='password'>비밀번호</Label>
      <InputBox>
        <EmailInput
          id='password'
          type={pwEyeOpen ? 'text' : 'password'}
          name='password'
          value={userInfo.password}
          placeholder='비밀번호를 입력하세요'
          autoComplete='off'
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

      <Label htmlFor='confirmpassword'>비밀번호 확인</Label>
      <InputBox>
        <EmailInput
          id='confirmpassword'
          type={pwEyeOpen ? 'text' : 'password'}
          name='confirmpassword'
          value={userInfo.confirmpassword}
          placeholder='비밀번호를 입력하세요'
          autoComplete='off'
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
      {errors.confirmpassword && (
        <div className='valid'>{errors.confirmpassword}</div>
      )}

      <Label htmlFor='name'>이름</Label>
      <InputBox>
        <EmailInput
          id='name'
          name='name'
          value={userInfo.name}
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
          placeholder='이름를 입력하세요'
        />
      </InputBox>
      {errors.name && <div className='valid'>{errors.name}</div>}

      <Label htmlFor='team'>팀</Label>
      <InputBox>
        <EmailInput
          id='team'
          name='team'
          value={userInfo.team}
          onChange={event => {
            OnChange(event, userInfo, setUserInfo);
          }}
          placeholder='팀이름를 입력하세요'
        />
      </InputBox>
      {errors.team && <div className='valid'>{errors.team}</div>}

      <LoginBtn type='submit'>회원가입</LoginBtn>
      <HelpBox style={{ marginBottom: '100px' }}>
        <span onClick={() => navigate('/signin')}>로그인 하러가기</span>
      </HelpBox>
      <Toast />
    </SignWrap>
  );
};

export default RegisterForm;
