import Arrow from '../../../assets/dropdownArrow.png';
import { PrioritySelect, DropIcon, TodoDropIcon } from './dropDown.styled';
import { useDropDown, priority } from './dropdown';
import { useState, useRef } from 'react';

const PriorityDropDown = ({ todoInfo, setTodoInfo }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState('');
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
      <>
        {el.name === '4' ? (
          <li onClick={ValueClick} className='defaultLi'>
            <div className='default'></div>
            <img src={el.number} alt='' className='img' />
          </li>
        ) : (
          <li onClick={ValueClick}>
            <img src={el.flag} alt='' className='img' />
            <img src={el.number} alt='' className='img' />
          </li>
        )}
      </>
    );
  };

  return (
    <PrioritySelect ref={dropDownRef}>
      <input
        type='text'
        value={finalValue}
        // readOnly={true}
        onClick={() => setIsOpen(!isOpen)}
        placeholder='우선순위'
      />
      <TodoDropIcon />
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
