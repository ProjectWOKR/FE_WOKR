import { useState, useRef, useEffect } from 'react';
import { DropDownItem, useDropDown, teamPosi } from './dropdown';
import { DropdownContainer, DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';

const TeamPosiDropDown = ({ OnChangeOptionValue, setUserInfo, userInfo }) => {
  // console.log(OnChangeOptionValue);
  // 드롭다운 상태
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);

  const [finalValue, setFinalValue] = useState('');

  console.log(userInfo);

  return (
    <DropdownContainer ref={dropDownRef} className='container'>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='직급을 선택하세요'
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
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              finalValue={finalValue}
            />
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default TeamPosiDropDown;
