import { useState, useEffect } from 'react';

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
};

export const teamPosi = {
  list: ['팀장', '팀원'],
  defaultValue: '직급을 선택하세요',
};

export const color = {
  list: [
    { index: 1, color: '#9B9B9B', name: '그레이' },
    { index: 2, color: '#D2EB8A', name: '라임' },
    { index: 3, color: '#FFF384', name: '레몬' },
    { index: 4, color: '#FFC6D7', name: '바비' },
    { index: 5, color: '#BFD9FF', name: '소라' },
    { index: 6, color: '#D6B6FF', name: '보라' },
  ],
};
