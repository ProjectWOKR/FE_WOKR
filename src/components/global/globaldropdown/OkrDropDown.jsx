import { useState, useRef } from 'react';
import { useDropDown, color } from './dropdown';
import {
  DropIcon,
  OkrDropBox,
  OkrDropContainer,
  OkrItem,
} from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { GetOKR } from '../../../apis/apiGET';
import { Objective } from './../../mainpage/OKR.styled';

const OkrDropDown = ({ setTodoInfo, todoInfo }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');

  const [okrData, setOkrData] = useState();

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {
      console.log(response);
      setOkrData(response);
    },
    onError: response => {
      // console.log('실패');
      console.log(response);
    },
  });


  const ValueClick = e => {
    setIsOpen(!isOpen);
    setFinalValue(e.target.outerText);

    setTodoInfo({ ...todoInfo, okr: e.target.outerText });
  };

  console.log('todoInfo :', todoInfo);
  // console.log('finalValue :', finalValue);

  return (
    <OkrDropBox ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='KR 핵심 결과 선택'
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <OkrDropContainer>
          <h2>KR 핵심 결과 선택</h2>
          {okrData.map(data => (
            <OkrItem key={data.objectiveId} style={{ color: `${data.color}` }}>
              <div className='title'>
                <span>O</span> {data.objective}
              </div>
              {data.keyresult.map((el, index) => (
                <div key={index} className='keyresult' onClick={ValueClick}>
                  <span style={{ color: `${data.color}` }}>KR{index + 1}</span>{' '}
                  {el.keyResult}
                </div>
              ))}
            </OkrItem>
          ))}
          <div
            className='none'
            onClick={ValueClick}
            name='none 핵심결과 선택하지 않고 To Do 작성'>
            <span>none</span> 핵심결과 선택하지 않고 To Do 작성
          </div>
        </OkrDropContainer>
      )}
    </OkrDropBox>
  );
};

export default OkrDropDown;
