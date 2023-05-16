import { StFilterContainer } from '../../styles/tododetail.styled';
import DoneFilter from './DoneFilter';
import KrFilter from './KrFilter';
import SortFilter from './SortFilter';
import React from 'react';

const Filter = () => {
  return (
    <StFilterContainer>
      <KrFilter />
      <DoneFilter />
      <SortFilter />
    </StFilterContainer>
  );
};

export default Filter;
