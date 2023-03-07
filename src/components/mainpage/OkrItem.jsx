import React from 'react';

const OkrObject = () => {
  return (
    <div className='object'>
      <div className='title'>O</div>
      <div className='detail'>
        <div className='name_date'>
          <div>찰스 몸짱 만들기</div>
          <p>2023-01-27 ~ 2023-04-26</p>
        </div>
        <div className='percent'>
          <input type='range' />
          <p>20%</p>
        </div>
      </div>
    </div>
  );
};

export default OkrObject;
