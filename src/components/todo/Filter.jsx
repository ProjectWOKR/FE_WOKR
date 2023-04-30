import { GetKR, GetOKR } from '../../apis/apiGET';
import checkOff from '../../assets/checkOff.png';
import checkOn from '../../assets/checkOn.png';
import filter from '../../assets/filter1.png';
import { krDataAtom } from '../../store/store';
import { StFilterContainer } from '../../styles/tododetail.styled';
import DoneFilter from './DoneFilter';
import KrFilter from './KrFilter';
import SortFilter from './SortFilter';
import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

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
