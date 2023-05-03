import blueF from '../../../assets/blue.png';
import four from '../../../assets/four.png';
import grayF from '../../../assets/gray.png';
import good from '../../../assets/newemoji1.png';
import normal from '../../../assets/newemoji2.png';
import bad from '../../../assets/newemoji3.png';
import one from '../../../assets/one.png';
import redF from '../../../assets/red.png';
import three from '../../../assets/three.png';
import two from '../../../assets/two.png';
import yellowF from '../../../assets/yellow.png';
import { useState, useEffect } from 'react';

export const useDropDown = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // 밖에 누르면 닫히기
  useEffect(() => {
    const clickOutside = e => {
      // console.log(ref.current);
      // console.log(e.target);
      // console.log(ref.current.contains(e.target));
      // console.log(ref.current);
      // if (ref.current && !ref.current.contains(e.target)) {
      //   setIsOpen(!isOpen);
      // }
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

// export const team = {
//   list: [
//     'P01',
//     'P02',
//     'P03',
//     'P04',
//     'P05',
//     'P06',
//     'P07',
//     'P08',
//     'P09',
//     'P010',
//     'P011',
//     'P012',
//     'P013',
//   ],
//   defaultValue: '부서를 선택해주세요',
// };

export const teamPosi = {
  list: ['팀장', '팀원'],
  defaultValue: '직급을 선택하세요',
};

export const color = {
  list: [
    { index: 1, color: '#FF739D', name: '복숭아' },
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
