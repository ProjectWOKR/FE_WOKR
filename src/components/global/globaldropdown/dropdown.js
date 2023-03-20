import { useState, useEffect } from 'react';

import redF from '../../../assets/red.png';
import yellowF from '../../../assets/yellow.png';
import blueF from '../../../assets/blue.png';
import grayF from '../../../assets/gray.png';
import one from '../../../assets/one.png';
import two from '../../../assets/two.png';
import three from '../../../assets/three.png';
import four from '../../../assets/four.png';

import good from '../../../assets/good.png';
import normal from '../../../assets/normal.png';
import bad from '../../../assets/bad.png';

export const useDropDown = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // 밖에 누르면 닫히기
  useEffect(() => {
    const clickOutside = e => {
      console.log(ref.current);
      console.log(e.target);
      console.log(ref.current.contains(e.target)); //true
      console.log(ref.current && !ref.current.contains(e.target)); // false
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
    { index: 1, color: '#F35330', name: '파이어' },
    { index: 2, color: '#457EFF', name: '워터' },
    { index: 3, color: '#9747FF', name: '퍼플' },
    { index: 4, color: '#00E58C', name: '그린' },
  ],
};

export const priority = {
  list: [
    { flag: redF, number: one, desc: '1순위', name: '1' },
    { flag: yellowF, number: two, desc: '2순위', name: '2' },
    { flag: blueF, number: three, desc: '3순위', name: '3' },
    { flag: grayF, number: four, desc: '4순위', name: '4' },
  ],
};

export const emotion = {
  list: [
    { emotion: good, name: 1 },
    { emotion: normal, name: 0 },
    { emotion: bad, name: 2 },
  ],
};
