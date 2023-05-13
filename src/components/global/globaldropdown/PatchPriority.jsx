import { GetTodo } from '../../../apis/apiGET';
import Arrow from '../../../assets/dropdownArrow.png';
import { PrioritySelect, DropIcon, TodoDropIcon } from './dropDown.styled';
import { useDropDown, priority } from './dropdown';
import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';

const PatchPriority = ({ title, setTitle }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDown(dropDownRef, false);
  const [finalValue, setFinalValue] = useState(`${title.priority}순위`);

  // const { data: getTodoData } = useQuery(['TODO'], GetTodo, {
  //   onSuccess: response => {},
  //   onError: response => {},
  // });
  const DropDownItem = ({
    value,
    setFinalValue,
    setIsOpen,
    isOpen,
    setTitle,
    title,
    name,
    el,
  }) => {
    const ValueClick = () => {
      setFinalValue(name);
      setIsOpen(!isOpen);

      setTitle({ ...title, priority: Number(value) });
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
        // readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      <TodoDropIcon src={Arrow} />
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
              title={title}
              setTitle={setTitle}
            />
          ))}
        </ul>
      )}
    </PrioritySelect>
  );
};

export default PatchPriority;
