import { useState, useRef } from 'react';
import { useDropDown, color } from './dropdown';
import { DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';

const OkrDropDown = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');

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
      console.log(value);

      setObjInfo({ ...objInfo, color: value }); // 색상 hex코드
      // setObjInfo({ ...objInfo, color: 1 }); // int
    };

    return <li onClick={ValueClick} style={{ backgroundColor: value }} />;
  };

  return (
    // <ColorSelect ref={dropDownRef}>
    //   <input
    //     type='text'
    //     value={finalValue}
    //     readOnly={true}
    //     onClick={() => setIsOpen(!isOpen)}
    //     placeholder='색상'
    //   />
    //   <DropIcon src={Arrow} />
    //   {isOpen && (
    //     <ul>
    //       {color.list.map(el => (
    //         <DropDownItem
    //           key={el.index}
    //           number={el.index}
    //           name={el.name}
    //           value={el.color}
    //           setIsOpen={setIsOpen}
    //           isOpen={isOpen}
    //           setFinalValue={setFinalValue}
    //           objInfo={objInfo}
    //           setObjInfo={setObjInfo}
    //         />
    //       ))}
    //     </ul>
    //   )}
    // </ColorSelect>
    <ul>
      하이
      <li>1</li>
      <li>2</li>
    </ul>
  );
};

export default OkrDropDown;
