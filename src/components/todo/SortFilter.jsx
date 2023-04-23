import sort from '../../assets/sort.png';
import { useDropDown } from '../global/globaldropdown/dropdown';
import { StSortFilter } from './tododetail.styled';
import React, { useRef } from 'react';

const SortFilter = () => {
  const sortDropRef = useRef(null);

  const [sortDropOn, setSortDropOn] = useDropDown(sortDropRef, false);

  const sortDropHandler = () => {
    setSortDropOn(!sortDropOn);
  };
  return (
    <StSortFilter ref={sortDropRef}>
      <div className='sortContainer' onClick={sortDropHandler}>
        <img src={sort} alt='' />
        <span className='result'>정렬</span>
      </div>

      {sortDropOn && (
        <ul className='sortDrop'>
          <li>우선순위</li>
          <li>등록일자</li>
          <li>마감기한</li>
        </ul>
      )}
    </StSortFilter>
  );
};

export default SortFilter;
