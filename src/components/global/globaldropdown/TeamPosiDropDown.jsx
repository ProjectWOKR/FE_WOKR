import { useState, useRef } from 'react';
import { DropDownItem, useDropDown, teamPosi } from './dropdown';
import { DropdownContainer, DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';

const TeamPosiDropDown = ({ OnChangeOptionValue, setUserInfo, userInfo }) => {
  // console.log(OnChangeOptionValue);
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState(teamPosi.defaultValue);

  const name1 = teamPosi.name;
  // console.log(name);
  console.log(userInfo);

  console.log(finalValue);

  const setData = () => {
    if (finalValue !== '직급을 선택하세요') {
      setUserInfo({ ...userInfo, teamposition: finalValue });
    }
  };

  return (
    <DropdownContainer ref={dropDownRef}>
      <input
        type='button'
        value={finalValue}
        onClick={() => setIsOpen(!isOpen)}
        onChange={setData}
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <ul>
          {teamPosi.list.map((value, index) => (
            <DropDownItem
              key={index}
              value={value}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setFinalValue={setFinalValue}
            />
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default TeamPosiDropDown;
