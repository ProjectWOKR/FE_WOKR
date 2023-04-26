import { GetOKR } from '../../../apis/apiGET';
import Arrow from '../../../assets/dropdownArrow.png';
import fillArrow from '../../../assets/filldropArrow.png';
import { ColorSelect, DropFillIcon, DropIcon } from './dropDown.styled';
import { useDropDown, color } from './dropdown';
import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';

const ColorDropDown = ({ setObjInfo, objInfo }) => {
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('색상');
  const [filterColor, setFilterColor] = useState();
  // console.log('finalValue :', finalValue);

  const [onFocus, setOnFocus] = useState(false);

  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {
      // console.log('abaaa', response);
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
      // console.log('res', result);
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
      <div
        className='customInput'
        onClick={() => setIsOpen(!isOpen)}
        onMouseLeave={() => {
          setOnFocus(!onFocus);
        }}
        onMouseEnter={() => {
          setOnFocus(!onFocus);
        }}>
        <div className='valueFlex'>
          <div className='value'>{finalValue}</div>
          {onFocus ? <DropFillIcon /> : <DropIcon />}
        </div>
      </div>

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
