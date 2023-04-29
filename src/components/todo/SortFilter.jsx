import sort from '../../assets/sort.png';
import { StSortFilter } from '../../styles/tododetail.styled';
import { useDropDown } from '../global/globaldropdown/dropdown';
import React, { useRef, useState } from 'react';

const SortFilter = () => {
  const sortDropRef = useRef(null);

  const [sortDropOn, setSortDropOn] = useDropDown(sortDropRef, false);

  const sortDropHandler = () => {
    setSortDropOn(!sortDropOn);
  };

  const [showPriority, setShowPriority] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showCreateDate, setShowCreateDate] = useState(false);
  return (
    <StSortFilter ref={sortDropRef}>
      <div className='sortContainer' onClick={sortDropHandler}>
        <img src={sort} alt='' />
        <span className='result'>정렬</span>
      </div>

      {sortDropOn && (
        <ul className='sortDrop'>
          <li
            onMouseOver={() => setShowPriority(true)}
            onMouseOut={() => setShowPriority(false)}>
            <span>우선순위</span>
            {showPriority && (
              <div>
                <p>높은순</p>
                <p>낮은순</p>
              </div>
            )}
          </li>
          <li
            onMouseOver={() => setShowCreateDate(true)}
            onMouseOut={() => setShowCreateDate(false)}>
            등록일자
            {showCreateDate && (
              <div>
                <p>높은순</p>
                <p>낮은순</p>
              </div>
            )}
          </li>
          <li
            onMouseOver={() => setShowEndDate(true)}
            onMouseOut={() => setShowEndDate(false)}>
            마감기한
            {showEndDate && (
              <div>
                <p>높은순</p>
                <p>낮은순</p>
              </div>
            )}
          </li>
        </ul>
      )}
    </StSortFilter>
  );
};

export default SortFilter;
