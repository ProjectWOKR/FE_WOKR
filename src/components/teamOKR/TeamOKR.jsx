import React from 'react';
import { GetDetailObjective } from '../../apis/apiGET';
import { useQuery } from '@tanstack/react-query';

export default function TeamOKR() {
  const { data: getDetailObjectiveData } = useQuery(
    ['getObjective'],
    GetDetailObjective,
    {
      refetchOnWindowFocus: false,
      onSuccess: response => {
        console.log(response);
      },
      onError: response => {},
    }
  );

  return (
    <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Coming Soon..!</h2>
  );
}
