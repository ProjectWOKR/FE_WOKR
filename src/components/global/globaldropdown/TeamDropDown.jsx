import Arrow from '../../../assets/dropdownArrow.png';
import { DropdownContainer, DropIcon } from './dropDown.styled';
import { useDropDown, team } from './dropdown';
import { useState, useRef } from 'react';

const TeamDropDown = ({ setUserInfo, userInfo }) => {
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');

  const DropDownItem = ({
    value,
    setFinalValue,
    setIsOpen,
    isOpen,
    setUserInfo,
    userInfo,
  }) => {
    const ValueClick = () => {
      setFinalValue(value);
      setIsOpen(!isOpen);
      setUserInfo({ ...userInfo, team: value });
    };

    return <li onClick={ValueClick}>{value}</li>;
  };

  return (
    <DropdownContainer ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='부서를 선택하세요'
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
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default TeamDropDown;
