import { GetKR, GetOKR } from '../../apis/apiGET';
import checkOff from '../../assets/checkOff.png';
import checkOn from '../../assets/checkOn.png';
import filter from '../../assets/filter1.png';
import { krDataAtom } from '../../store/store';
import DoneFilter from './DoneFilter';
import KrFilter from './KrFilter';
import SortFilter from './SortFilter';
import { StFilterContainer } from './tododetail.styled';
import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

const Filter = () => {
  const [krState, setKrState] = useRecoilState(krDataAtom);
  // console.log(krState);
  const { data: getOkrData } = useQuery(['krData'], GetKR, {
    retry: 3,
    staleTime: 60 * 1000,
    onSuccess: response => {
      setKrState(response);
    },
  });

  const doneDrop = useRef(null);
  const sortDrop = useRef(null);

  return (
    <StFilterContainer>
      <KrFilter />
      <DoneFilter />
      <SortFilter />
    </StFilterContainer>
  );
};

export default Filter;
