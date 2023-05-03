import { GetOKR } from '../../../apis/apiGET';
import Arrow from '../../../assets/dropdownArrow.png';
import { okrDataAtom } from '../../../store/store';
import {
  DropIcon,
  OkrDropBox,
  OkrDropContainer,
  OkrItem,
  TodoDropIcon,
} from './dropDown.styled';
import { useDropDown } from './dropdown';
import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';

const OkrDropDown = ({ setKid, setOid, title }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);

  const [valueState, setValueState] = useState(false);

  const [finalValue, setFinalValue] = useState('');

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {},
    onError: response => {},
  });
  // const getOkrData = useRecoilValue(okrDataAtom);

  const ValueClick = e => {
    setIsOpen(!isOpen);
    setFinalValue(e.target.outerText);

    if (e.target.id === '') {
      setKid(0);
      setOid(0);
    } else {
      setOid(Number(e.target.attributes.name.value));
      setKid(Number(e.target.id));
    }

    setValueState(true);
  };

  return (
    <OkrDropBox ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        // placeholder='none 핵심결과 선택하지 않고 To Do 작성'
        placeholder={
          title
            ? '선택하지 않으면 기존과 동일합니다.'
            : 'none Key Result 선택하지 않고 To-Do 추가하기'
        }
      />

      <TodoDropIcon className='todoDropicon' />
      {isOpen && (
        <OkrDropContainer>
          <h2>KR 핵심 결과 선택</h2>
          {getOkrData.map((data, dataIndex) => (
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
                  onClick={event => {
                    ValueClick(event, dataIndex);
                  }}>
                  <span style={{ color: data.color }}>
                    KR{index + 1}
                    {'\u00A0'}
                  </span>
                  {el.keyResult}
                </div>
              ))}
            </OkrItem>
          ))}
          <div
            className='none'
            onClick={event => {
              ValueClick(event, 'none');
            }}
            name='none 핵심결과 선택하지 않고 To Do 작성'>
            <span>none{'\u00A0'}</span> 핵심결과 선택하지 않고 To Do 작성
          </div>
        </OkrDropContainer>
      )}
    </OkrDropBox>
  );
};

export default OkrDropDown;
