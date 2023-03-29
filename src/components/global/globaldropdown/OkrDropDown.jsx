import { useState, useRef } from 'react';
import { useDropDown } from './dropdown';
import {
  DropIcon,
  KRTodoBox,
  KRTodoDefault,
  OkrDropBox,
  OkrDropContainer,
  OkrItem,
} from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';
import { useQuery } from '@tanstack/react-query';
import { GetOKR } from '../../../apis/apiGET';

const OkrDropDown = ({ setKid, setOid, title }) => {
  // console.log(setOid);
  // console.log(title);
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);

  const [finalValueKR, setFinalValueKR] =
    useState('선택하지 않으면 기존꺼와 동일');
  const [finalValueText, setFinalValueText] = useState('');

  const [finalValueKRColor, setFinalValueKRColor] = useState('');
  // const [okrData, setOkrData] = useState();
  const [valueState, setValueState] = useState(false);

  const [finalValue, setFinalValue] = useState('');

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {
      // console.log(getOkrData);
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
      console.log(e.target.attributes.name.value);
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
            : 'none 핵심결과 선택하지 않고 To Do 작성'
        }
      />
      {/* <KRTodoBox className='input-container' onClick={() => setIsOpen(!isOpen)}>
        <div
          style={{
            color: finalValueKR ? finalValueKRColor : 'black',
          }}>
          {finalValueKR}
        </div>

        <div className='black'>{finalValueText}</div>
      </KRTodoBox> */}

      <DropIcon src={Arrow} />
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
