import filter from '../../assets/filter1.png';
import { useDropDown } from '../global/globaldropdown/dropdown';
import { StDoneFilter } from './tododetail.styled';
import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const DoneFilter = () => {
  const DoneDropRef = useRef(null);

  const [DoneDropOn, setDoneDropOn] = useDropDown(DoneDropRef, false);

  const DoneDroponHandler = () => {
    setDoneDropOn(!DoneDropOn);
  };

  return (
    <StDoneFilter ref={DoneDropRef}>
      <div className='filterContainer' onClick={DoneDroponHandler}>
        <img src={filter} alt='' />
        <div className='result'>
          <span>완료 : 전체</span>
        </div>
      </div>

      {DoneDropOn && (
        <div className='doneDrop'>
          <div className='inputBox'>
            <div className='hashFlex'>
              {/* <span>완료</span> */}

              <div className='hash'>
                <span>완료</span>
                <GrClose />
              </div>
            </div>
            {/* <div className='closeBtn'></div> */}
            <AiFillCloseCircle className='closeBtn' />
          </div>
          <ul>
            <li>
              <input type='checkbox' />
              <span className='done'>완료</span>
            </li>
            <li>
              <input type='checkbox' />
              <span className='done'>미완료</span>
            </li>
          </ul>
        </div>
      )}
    </StDoneFilter>
  );
};

export default DoneFilter;
