import React from 'react';

const Kr = () => {
  return (
    <div className='kr'>
      <div className='title'>KR1</div>
      <div className='detail'>
        <div>체지방 7% 감소</div>
        <div className='percent'>
          <input type='range' />
          <p>20%</p>
          <div className='expression'></div>
        </div>
      </div>
    </div>
  );
};

export default Kr;
