import React, { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [persent, setPersent] = useState(0);
  return (
    <PersentBox>
      <input
        type='range'
        min={0}
        max={100}
        step={1}
        value={persent}
        onChange={e => setPersent(e.target.valueAsNumber)}
      />
      <div className='bg' style={{ width: `${persent}%` }}></div>
      <div className='color'>{persent}</div>
    </PersentBox>
  );
};

export default Test;

const PersentBox = styled.div`
  position: relative;
  input[type='range'] {
    //기존 디자인 없애기
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    background: #ddd;
    padding: 0;
  }
  input[type='range']::-webkit-slider-thumb {
    // 포인터 역할
    -webkit-appearance: none;
    background: #564b9a;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: -10px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
  }
  input[type='range']::-webkit-slider-runnable-track {
    //포인터가 움직이는 track
    /* height: 3px; */
    width: 100%;
    height: 11px;
    cursor: pointer;
    border-radius: 1.3px;
    border: 0.2px solid #f2f4f6;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    /* background: #f2f4f6; */
    /* background: #ddd; */
  }
  .bg {
    height: 11px;
    /* margin-top: 10px; */
    background-color: skyblue;
    position: absolute;
    top: 0px;
    /* left: 0px; */
  }
`;
