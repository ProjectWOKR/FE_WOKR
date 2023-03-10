import { useState, useEffect } from 'react';

export const DropDownItem = ({
  value,
  setFinalValue,
  setIsOpen,
  isOpen,
  setUserInfo,
  userInfo,
  finalValue,
}) => {
  const ValueClick = () => {
    console.log(value);
    setIsOpen(!isOpen);
    setFinalValue(value);
    setUserInfo({ ...userInfo, teamposition: value });
    console.log('눌림');
  };
  useEffect(() => {
    // setFinalValue(value);
    // setUserInfo({ ...userInfo, teamposition: value });
    console.log(userInfo);
  }, [value]);

  return <li onClick={ValueClick}>{value}</li>;
};

export const useDropDown = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // 밖에 누르면 닫히기
  useEffect(() => {
    const clickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    // 전역 객체에 이벤트를 달아 클릭한 요소 안의 요소인지 확인
    if (isOpen) {
      window.addEventListener('click', clickOutside);
    }

    //메모리 누수를 위해 cleanup 함수
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
};

export const team = {
  list: ['기획팀', '개발팀', '인사팀'],
  defaultValue: '부서를 선택해주세요',
  name: 'team',
};

export const teamPosi = {
  list: ['팀장', '팀원'],
  defaultValue: '직급을 선택하세요',
  name: 'teamposition',
};
