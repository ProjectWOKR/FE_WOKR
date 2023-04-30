import filter from '../../assets/filter1.png';
import { isDone } from '../../store/store';
import { StDoneFilter } from '../../styles/tododetail.styled';
import { useDropDown } from '../global/globaldropdown/dropdown';
import React, { useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useRecoilState } from 'recoil';

const DoneFilter = () => {
  const DoneDropRef = useRef(null);

  const [isCompletion, setIsCompletion] = useRecoilState(isDone);

  // console.log('isCompletion :', isCompletion);

  const [DoneDropOn, setDoneDropOn] = useDropDown(DoneDropRef, false);

  const DoneDroponHandler = () => {
    // console.log(DoneDropOn);
    setDoneDropOn(!DoneDropOn);
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setIsCompletion([...isCompletion, item]);
    } else if (!checked) {
      setIsCompletion(isCompletion.filter(el => el !== item));
    }
  };

  const thisDelete = item => {
    console.log(item);
    // setCheckedList(checkedList.filter(el => el !== item));
    setIsCompletion(isCompletion.filter(el => el !== item));
  };

  const removeAll = () => {
    // setCheckedList([]);
    setIsCompletion([]);
  };

  const Title = () => {
    if (isCompletion.length === 0) {
      return <span onClick={DoneDroponHandler}>완료 : 선택사항 없음</span>;
    } else if (isCompletion.includes('done') && isCompletion.length === 1) {
      return <span onClick={DoneDroponHandler}>완료 : 완료</span>;
    } else if (isCompletion.includes('notDone') && isCompletion.length === 1) {
      return <span onClick={DoneDroponHandler}>완료 : 미완료</span>;
    } else {
      return <span onClick={DoneDroponHandler}>완료 : 전체</span>;
    }
  };

  return (
    <StDoneFilter ref={DoneDropRef}>
      <div className='filterContainer' onClick={DoneDroponHandler}>
        <img src={filter} alt='' />
        <span>
          완료 :&nbsp;
          {isCompletion.length === 0
            ? '선택안함'
            : isCompletion.includes('done') && isCompletion.length === 1
            ? '완료'
            : isCompletion.includes('notDone') && isCompletion.length === 1
            ? '미완료'
            : '전체'}
        </span>
        {/* <Title DoneDropRef={DoneDropRef} /> */}
      </div>

      {DoneDropOn && (
        <div className='doneDrop'>
          <div className='inputBox'>
            <div className='hashFlex'>
              {isCompletion?.map((data, index) => (
                <div className='hash' key={index}>
                  <span>{data === 'done' ? '완료' : '미완료'}</span>
                  <GrClose onClick={() => thisDelete(data)} />
                </div>
              ))}
            </div>
            {/* <div className='closeBtn'></div> */}
            <AiFillCloseCircle className='closeBtn' onClick={removeAll} />
          </div>
          <ul>
            <li>
              <input
                type='checkbox'
                onChange={e =>
                  onCheckedElement(e.target.checked, e.target.value)
                }
                value='done'
                checked={isCompletion.includes('done') ? true : false}
              />
              <span className='done'>완료</span>
            </li>
            <li>
              <input
                type='checkbox'
                onChange={e =>
                  onCheckedElement(e.target.checked, e.target.value)
                }
                value='notDone'
                checked={isCompletion.includes('notDone') ? true : false}
              />
              <span className='done'>미완료</span>
            </li>
            {/* <li>
              <input
                type='checkbox'
                onChange={e =>
                  onCheckedElement(e.target.checked, e.target.value)
                }
                value='done'
                checked={isCompletion.status === 'all' ? true : false}
              />
              <span className='done'>전체</span>
            </li> */}
          </ul>
        </div>
      )}
    </StDoneFilter>
  );
};

export default DoneFilter;
