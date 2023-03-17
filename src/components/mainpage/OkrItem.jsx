import React, { useState } from 'react';
import { OKRBox, Objective } from './OKR.styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetDetailKR, GetKR, GetObjective } from '../../apis/apiGET.js';
import { PatchObjectiveProgress } from '../../apis/apiFETCH';

const OkrObject = () => {
  const queryClient = useQueryClient();

  const { data: getObjectiveData } = useQuery(['getObjective'], GetObjective, {
    onSuccess: response => {
      setSlicedArray(response?.slice(0, 2));
    },
    onError: response => {},
  });

  const { data: getKRData } = useQuery(['getObjective'], GetKR, {
    onSuccess: response => {
      // console.log('11', response);
    },
    onError: response => {},
  });

  const { data: getDeatilKRData } = useQuery(['getObjective'], GetDetailKR, {
    onSuccess: response => {
      // console.log('11dd', response);
    },
    onError: response => {},
  });

  const { mutate: rangeMutate } = useMutation(PatchObjectiveProgress, {
    onSuccess: response => {
      queryClient.invalidateQueries(['getObjective']);
    },
    onError: response => {},
  });

  const [slicedArray, setSlicedArray] = useState([]);
  const [RangeValue, setRangeValue] = useState({
    range1: 0,
    range2: 0,
  });

  const onRangeChange = (event, index) => {
    if (index === 0) {
      setRangeValue({ ...RangeValue, range1: event.target.value });
    }
    if (index === 1) {
      setRangeValue({ ...RangeValue, range2: event.target.value });
    }
  };

  const onRangeMouseUp = (index, id) => {
    if (index === 0) {
      let value = { progress: RangeValue.range1 };
      rangeMutate({ value, id });
    }
    if (index === 1) {
      let value = { progress: RangeValue.range2 };
      rangeMutate({ value, id });
    }
  };
  return (
    <OKRBox>
      {slicedArray?.map((data, index) => {
        return (
          <Objective key={data.objectiveId}>
            <div className='Box'>
              <div className='Logo'>O</div>
            </div>
            <div className='Name'>{data.objective}</div>

            <input
              className='Range'
              type='range'
              min='0'
              max='100'
              step='1'
              onChange={event => {
                onRangeChange(event, index);
              }}
              onMouseUp={() => {
                onRangeMouseUp(index, data.objectiveId);
              }}
            />
            <div className='percent'>{data.progress}</div>
          </Objective>
        );
      })}
    </OKRBox>
  );
};

export default OkrObject;
