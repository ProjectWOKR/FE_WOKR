import React from 'react';

const OkrObject = ({ objectiveData }) => {
  return (
    <>
      {objectiveData?.map(data => {
        return (
          <div className='object'>
            <div className='title'>O</div>
            <div className='detail'>
              <div className='name_date'>
                <div>{data.objective}</div>
                <p>
                  {data.startdate} ~ {data.enddate}
                </p>
              </div>
              <div className='percent'>
                <input type='range' />
                <p>{data.progress}%</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OkrObject;
