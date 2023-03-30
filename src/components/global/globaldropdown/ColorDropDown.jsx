import { GetOKR } from '../../../apis/apiGET';
import Arrow from '../../../assets/dropdownArrow.png';
import { ColorSelect, DropIcon } from './dropDown.styled';
import { useDropDown, color } from './dropdown';
import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';

const ColorDropDown = ({ setObjInfo, objInfo }) => {
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');
  const [filterColor, setFilterColor] = useState();
  console.log('col', color);

  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {
      console.log('abaaa', response);
      const filterColorData = response.map(data => {
        return data.color;
      });
      const result = color.list
        .filter(item => !filterColorData.includes(item.color))
        .map(item => {
          return {
            index: item.index,
            color: item.color,
            name: item.name,
          };
        });
      setFilterColor(result);
      console.log('res', result);
    },
  });

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
          {filterColor.map(el => (
            <DropDownItem
              key={el.index}
              number={el.index}
              name={el.name}
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
