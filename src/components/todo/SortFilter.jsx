import sort from '../../assets/sort.png';
import check from '../../assets/sortCheck.png';
import { todoDateInfo } from '../../store/store';
import { StSortFilter } from '../../styles/tododetail.styled';
import { useDropDown } from '../global/globaldropdown/dropdown';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

const SortFilter = () => {
  const sortDropRef = useRef(null);

  const [sortDropOn, setSortDropOn] = useDropDown(sortDropRef, false);

  const sortDropHandler = () => {
    setSortDropOn(!sortDropOn);
  };

  const [showPriority, setShowPriority] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showCreateDate, setShowCreateDate] = useState(false);

  const [info, setInfo] = useRecoilState(todoDateInfo);
  // console.log(info);

  const clickSortTitle = e => {
    // console.log(e.target.id);
    setInfo({ ...info, orderby: e.currentTarget.id });
  };

  const clickRole = e => {
    // console.log(e.target.id);
    setInfo({ ...info, orderbyrole: e.target.id });
  };

  return (
    <StSortFilter ref={sortDropRef}>
      <div className='sortContainer' onClick={sortDropHandler}>
        <img src={sort} alt='' />
        <span className='result'>정렬</span>
      </div>

      {sortDropOn && (
        <ul className='sortDrop'>
          {/* 중요도순 */}
          {info.orderby === 'priority' ? (
            <li
              style={{ backgroundColor: '#d9d9d9' }}
              onMouseOver={() => setShowPriority(true)}
              onMouseOut={() => setShowPriority(false)}>
              <p className='sortTitle' id='priority' onClick={clickSortTitle}>
                우선순위
              </p>
              {showPriority && (
                <div className='sideDrop'>
                  {info.orderbyrole === 'desc' ? (
                    <>
                      <p id='desc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        높은순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        낮은순
                      </p>
                    </>
                  ) : (
                    <>
                      <p id='desc' onClick={clickRole}>
                        높은순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        낮은순
                      </p>
                    </>
                  )}
                </div>
              )}
            </li>
          ) : (
            <li
              onMouseOver={() => setShowPriority(true)}
              onMouseOut={() => setShowPriority(false)}>
              <p className='sortTitle' onClick={clickSortTitle} id='priority'>
                우선순위
              </p>
              {showPriority && (
                <>
                  <div className='sideDrop'>
                    <p id='desc' onClick={clickRole}>
                      높은순
                    </p>
                    <p id='asc' onClick={clickRole}>
                      낮은순
                    </p>
                  </div>
                </>
              )}
            </li>
          )}

          {info.orderby === 'createdDate' ? (
            <li
              style={{ backgroundColor: '#d9d9d9' }}
              onMouseOver={() => setShowCreateDate(true)}
              onMouseOut={() => setShowCreateDate(false)}>
              <p
                className='sortTitle'
                id='createdDate'
                onClick={clickSortTitle}>
                등록일자
              </p>
              {showCreateDate && (
                <div className='sideDrop'>
                  {info.orderbyrole === 'desc' ? (
                    <>
                      <p id='desc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        오래된 순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        최신 순
                      </p>
                    </>
                  ) : (
                    <>
                      <p id='desc' onClick={clickRole}>
                        오래된 순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        최신 순
                      </p>
                    </>
                  )}
                </div>
              )}
            </li>
          ) : (
            <li
              onMouseOver={() => setShowCreateDate(true)}
              onMouseOut={() => setShowCreateDate(false)}>
              <p
                className='sortTitle'
                id='createdDate'
                onClick={clickSortTitle}>
                등록일자
              </p>
              {showCreateDate && (
                <div className='sideDrop'>
                  <p id='desc' onClick={clickRole}>
                    오래된 순
                  </p>
                  <p id='asc' onClick={clickRole}>
                    최신 순
                  </p>
                </div>
              )}
            </li>
          )}

          {info.orderby === 'endDate' ? (
            <li
              style={{ backgroundColor: '#d9d9d9' }}
              onMouseOver={() => setShowEndDate(true)}
              onMouseOut={() => setShowEndDate(false)}>
              <p className='sortTitle' id='endDate' onClick={clickSortTitle}>
                {/* <img src={check} alt='check' /> */}
                마감기한
              </p>
              {showEndDate && (
                <div className='sideDrop'>
                  {info.orderbyrole === 'desc' ? (
                    <>
                      <p id='desc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        이른 순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        늦은 순
                      </p>
                    </>
                  ) : (
                    <>
                      <p id='desc' onClick={clickRole}>
                        이른 순
                      </p>
                      <p id='asc' onClick={clickRole}>
                        <img src={check} alt='check' />
                        늦은 순
                      </p>
                    </>
                  )}
                </div>
              )}
            </li>
          ) : (
            <li
              onMouseOver={() => setShowEndDate(true)}
              onMouseOut={() => setShowEndDate(false)}>
              <p className='sortTitle' id='endDate' onClick={clickSortTitle}>
                마감기한
              </p>
              {showEndDate && (
                <div className='sideDrop'>
                  <p id='desc' onClick={clickRole}>
                    이른 순
                  </p>
                  <p id='asc' onClick={clickRole}>
                    늦은 순
                  </p>
                </div>
              )}
            </li>
          )}
        </ul>
      )}
    </StSortFilter>
  );
};

export default SortFilter;
