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

const OkrDropDown = ({ setTodoInfo, todoInfo, setKid, setOid }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValueKR, setFinalValueKR] = useState('');
  const [finalValueText, setFinalValueText] = useState(
    `none 핵심결과 선택하지 않고 To Do 작성`
  );
  const [finalValueKRColor, setFinalValueKRColor] = useState('');
  // const [okrData, setOkrData] = useState();
  const [valueState, setValueState] = useState(false);

  const { data: getOkrData } = useQuery(['getOkr'], GetOKR, {
    onSuccess: response => {},
    onError: response => {},
  });

  const ValueClick = (e, index) => {
    setIsOpen(!isOpen);
    console.log(index);
    console.log('aaa', e.target.outerText);
    setFinalValueKR(e.target.childNodes[0].textContent);
    setFinalValueText(e.target.childNodes[1].textContent);
    if (index === 'none') {
      setFinalValueKRColor('#BEBEBE');
    } else {
      setFinalValueKRColor(getOkrData[index].color);
      console.log(finalValueKRColor);
    }

    setValueState(true);
  };

  return (
    <OkrDropBox ref={dropDownRef}>
      <KRTodoBox className='input-container' onClick={() => setIsOpen(!isOpen)}>
        <div
          style={{
            color: finalValueKR ? finalValueKRColor : 'black',
          }}>
          {finalValueKR}
        </div>
        <KRTodoDefault valueState={valueState}>{finalValueText}</KRTodoDefault>
      </KRTodoBox>
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
