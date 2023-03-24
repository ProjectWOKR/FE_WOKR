import { useState, useRef } from 'react';
import { useDropDown, color } from './dropdown';
import { ColorSelect, DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';
import { useQuery } from '@tanstack/react-query';
import { GetOKR } from '../../../apis/apiGET';

const ColorDropDown = ({ setObjInfo, objInfo }) => {
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');

  console.log('col', color);

  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {});
  const DropDownItem = ({
    value,
    setFinalValue,
    setIsOpen,
    isOpen,
    setObjInfo,
    objInfo,
    name,
  }) => {
    const ValueClick = () => {
      setFinalValue(name);
      setIsOpen(!isOpen);

      setObjInfo({ ...objInfo, color: value }); // 색상 hex코드
    };

    return <li onClick={ValueClick} style={{ backgroundColor: value }} />;
  };

  return (
    <ColorSelect ref={dropDownRef} className='ref'>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='색상'
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <ul>
          {color.list.map(el => (
            <DropDownItem
              key={el.index}
              number={el.index}
              name='123'
              value={el.color}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setFinalValue={setFinalValue}
              objInfo={objInfo}
              setObjInfo={setObjInfo}
            />
          ))}
        </ul>
      )}
    </ColorSelect>
  );
};

export default ColorDropDown;
