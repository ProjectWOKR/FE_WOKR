import { useState, useRef } from 'react';
import { useDropDown, priority } from './dropdown';
import { PrioritySelect, DropIcon } from './dropDown.styled';
import Arrow from '../../../assets/dropdownArrow.png';

const PriorityDropDown = ({ todoInfo, setTodoInfo }) => {
  // console.log(todoInfo, setTodoInfo);
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');
  console.log(todoInfo);
  const DropDownItem = ({
    value,
    setFinalValue,
    setIsOpen,
    isOpen,
    setTodoInfo,
    todoInfo,
    name,
    el,
  }) => {
    const ValueClick = () => {
      setFinalValue(name);
      setIsOpen(!isOpen);

      setTodoInfo({ ...todoInfo, priority: Number(value) });
    };

    return (
      <li onClick={ValueClick}>
        <img src={el.flag} alt='' className='img' />
        <img src={el.number} alt='' className='img' />
      </li>
    );
  };

  return (
    <PrioritySelect ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='우선순위'
      />
      <DropIcon src={Arrow} />
      {isOpen && (
        <ul>
          {priority.list.map((el, index) => (
            <DropDownItem
              el={el}
              key={index}
              name={el.desc}
              value={el.name}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setFinalValue={setFinalValue}
              todoInfo={todoInfo}
              setTodoInfo={setTodoInfo}
            />
          ))}
        </ul>
      )}
    </PrioritySelect>
  );
};

export default PriorityDropDown;
