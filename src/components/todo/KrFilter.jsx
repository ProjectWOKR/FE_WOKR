import filter from '../../assets/filter1.png';
import { okrCheckSelector } from '../../store/store';
import { useDropDown } from '../global/globaldropdown/dropdown';
import { StKrFilter } from './tododetail.styled';
import React, { useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useRecoilState } from 'recoil';

const KrFilter = () => {
  const krDropRef = useRef(null);
  //드롭다운이 보여지는 상태관리
  const [krDropOn, setKrDropon] = useDropDown(krDropRef, false);

  const [checkData, setCheckData] = useRecoilState(okrCheckSelector);

  // console.log(checkData);

  // filterContainer를 누르면 Drop이 보이는 함수
  const krDroponHandler = () => {
    setKrDropon(!krDropOn);
  };

  // checkbox 클릭하면 해시태그 추가
  const addHash = e => {};

  const [isCheck, setIsCheck] = useState(true);
  const onCheckHandler = e => {
    // console.log(e);
    setIsCheck(!isCheck);
  };

  // console.log(krDrop);

  return (
    <StKrFilter ref={krDropRef}>
      <div className='filterContainer' onClick={krDroponHandler}>
        <img src={filter} alt='' />
        <div className='result'>
          <span>KR : 전체</span>
        </div>
      </div>

      {krDropOn && (
        <div className='krDrop'>
          <div className='inputBox'>
            <div className='hashFlex'>
              {/* <span>KR1</span> */}
              {checkData.map(data => (
                <div className='hash' key={data.keyResultId}>
                  <span>KR{data.krNumber}</span>
                  <GrClose />
                </div>
              ))}

              <div className='hash'>
                <span>None</span>
                <GrClose />
              </div>
            </div>
            {/* <div className='closeBtn'></div> */}
            <AiFillCloseCircle className='closeBtn' />
          </div>
          <ul>
            {checkData.map(data => (
              <li key={data.keyResultId} onClick={addHash}>
                <input
                  type='checkbox'
                  onChange={onCheckHandler}
                  checked={isCheck}
                />
                <span className='kr' style={{ color: 'rgb(69, 126, 255)' }}>
                  KR{data.krNumber}
                </span>
                :<span className='desc'>{data.keyResult}</span>
              </li>
            ))}

            <li>
              <input type='checkbox' onChange={onCheckHandler} checked />
              <span className='kr' style={{ color: 'rgb(155,155,155)' }}>
                None
              </span>
            </li>
          </ul>
        </div>
      )}
    </StKrFilter>
  );
};

export default KrFilter;
