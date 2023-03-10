import { useState, useRef } from 'react';
import { DropDownItem, useDropDown, team } from './dropdown';
import { DropdownContainer, DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';

const TeamDropDown = () => {
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState(team.defaultValue);

  return (
    <DropdownContainer ref={dropDownRef}>
      <input
        type='button'
        value={finalValue}
        onClick={() => setIsOpen(!isOpen)}
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <ul>
          {team.list.map((value, index) => (
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

export default TeamDropDown;
