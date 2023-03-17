import React, { useState } from 'react';
import { OKRBox, Objective, OKRSpace, KRBox } from './OKR.styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetDetailKR, GetKR, GetObjective, GetOKR } from '../../apis/apiGET.js';
import { PatchObjectiveProgress } from '../../apis/apiFETCH';

const OkrObject = () => {
  const queryClient = useQueryClient();

  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
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
    <div>
      {slicedArray?.map((data, index) => {
        const color = index % 2 === 0 ? 'red' : 'blue';
        return (
          <OKRBox key={index}>
            <>
              <Objective key={data.objectiveId} color={color}>
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
                <div className='percent'>{data.progress}%</div>
              </Objective>

              {data?.keyresult.map((KR, index) => {
                return (
                  <KRBox key={KR.keyResultId} color={color}>
                    <div className='Logo'>KR{index + 1}</div>
                    <div className='Name'>{KR.keyResult}</div>
                    <input
                      className='Range'
                      type='range'
                      min='0'
                      max='100'
                      step='1'
                    />
                    <div className='percent'>{KR.progress}%</div>
                    <div className='emotionBox'>
                      <div className='emotion'>🙂</div>
                    </div>
                  </KRBox>
                );
              })}
              <OKRSpace />
            </>
          </OKRBox>
        );
      })}
    </div>
  );
};

export default OkrObject;
