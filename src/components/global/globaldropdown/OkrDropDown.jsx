import { useState, useRef } from 'react';
import { useDropDown } from './dropdown';
import {
  DropIcon,
  OkrDropBox,
  OkrDropContainer,
  OkrItem,
} from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';
import { useQuery } from '@tanstack/react-query';
import { GetOKR } from '../../../apis/apiGET';

const OkrDropDown = ({ setTodoInfo, todoInfo, setKid, setOid }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');

  // const [okrData, setOkrData] = useState();

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {
      // console.log(response);
    },
    onError: response => {},
  });

  const ValueClick = e => {
    setIsOpen(!isOpen);
    setFinalValue(e.target.outerText);

    if (e.target.id === '') {
      // console.log('none일때');
      setKid(0);
      setOid(0);
    } else {
      // console.log('id가 있을때');
      setOid(Number(e.target.attributes.name.value));
      setKid(Number(e.target.id));
    }
  };

  return (
    <OkrDropBox ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='none 핵심결과 선택하지 않고 To Do 작성'
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <OkrDropContainer>
          <h2>KR 핵심 결과 선택</h2>
          {getOkrData.map(data => (
            <OkrItem key={data.objectiveId} style={{ color: `${data.color}` }}>
              <div className='title'>
                <span>O</span> {data.objective}
              </div>
              {data.keyresult.map((el, index) => (
                <div
                  key={el.keyResultId}
                  className='keyresult'
                  id={el.keyResultId}
                  name={data.objectiveId}
                  value={data.objectiveId}
                  onClick={ValueClick}>
                  <span style={{ color: `${data.color}` }}>KR{index + 1}</span>
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
