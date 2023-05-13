import { GetOKR, GetUserInfo } from '../../../apis/apiGET.js';
import kRAdd from '../../../assets/KRAdd.png';
import {
  patchOKRInfo,
  patchKRInfo,
  patchProgressInfo,
  userId,
  userInfo,
  krDataAtom,
} from '../../../store/store.js';
import {
  OKRBox,
  Objective,
  OKRSpace,
  KRBox,
  EmptyKR,
  PersentBox,
} from '../../../styles/OKR.styled.js';
import KrPatchModal from '../../global/globalModal/KrPatchModal.jsx';
import OkrPatchModal from '../../global/globalModal/OkrPatchModal.jsx';
import Portal from '../../global/globalModal/Potal.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import React, { useState, useRef, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const OkrItem = () => {
  const [okrModalOn, setOkrModalOn] = useState(false);
  const [krModalOn, setkrModalOn] = useState(false);
  const [progressModalOn, setprogressModalOn] = useState(false);

  const setPatchOkrInfo = useSetRecoilState(patchOKRInfo);
  const setPatchkrInfo = useSetRecoilState(patchKRInfo);
  const setPatchProgressInfo = useSetRecoilState(patchProgressInfo);

  // const [openDropdownId, setOpenDropdownId] = useState(null);

  /**O 모달 닫는 함수 */
  const onObjectiveCloseModal = () => {
    setOkrModalOn(!okrModalOn);
  };

  /**KR 모달 닫는 함수 */
  const onKRCloseModal = () => {
    setkrModalOn(!krModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const patchOKR = (id, objective, start, end, color) => {
    setPatchOkrInfo({
      id: id,
      objective: objective,
      startData: start,
      endData: end,
      color: color,
    });
    setOkrModalOn(!okrModalOn);
  };

  /**KR 모달 닫는 함수 */
  const onProgressCloseModal = () => {
    setprogressModalOn(!progressModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const patchProgress = (id, value, state, color) => {
    setPatchProgressInfo({
      id: id,
      value: value,
      state: state,
      color: color,
    });
    setprogressModalOn(!progressModalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const okrModalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */

  // 모달 외 클릭시 닫기위해 ref생성
  const krModalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */

  // 모달 외 클릭시 닫기위해 ref생성
  const progressModalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */

  const okrModalOutSideClick = e => {
    if (okrModalRef.current === e.target) {
      setOkrModalOn(!okrModalOn);
    }
  };

  const krModalOutSideClick = e => {
    if (krModalRef.current === e.target) {
      setOkrModalOn(!krModalOn);
    }
  };

  const progressModalOutSideClick = e => {
    if (progressModalRef.current === e.target) {
      setOkrModalOn(!progressModalOn);
    }
  };

  const [KRArray, setKRArray] = useState([]);
  const value = useRecoilValue(krDataAtom);
  // console.log('value :', value);
  // console.log('KRArray :', KRArray);
  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {
      // console.log('response :', response);
      const newArray = response.map(data => {
        const newKRArray = [...data.keyresult];
        newKRArray.sort((a, b) => a.krNumber - b.krNumber);
        return {
          ...data,
          keyresult: newKRArray,
        };
      });
      setKRArray(newArray);
    },
    onError: response => {},
    enabled: true,
  });

  const patchKR = (id, KR, state, index) => {
    if (state === 'patch')
      setPatchkrInfo({
        id: id,
        kr: KR,
        state: state,
      });
    else if (state === 'post') {
      let index1 = false;
      let index2 = false;
      let index3 = false;
      for (let i = 0; i < getOKRData[index]?.keyresult.length; i++) {
        const forNum = Number(getOKRData[index]?.keyresult[i].krNumber);
        if (forNum === 1) {
          index1 = true;
        }
        if (forNum === 2) {
          index2 = true;
        }
        if (forNum === 3) {
          index3 = true;
        }
      }
      if (index1 === false) {
        setPatchkrInfo({
          id: id,
          kr: KR,
          state: state,
          num: 1,
        });
      } else if (index1 === true && index2 === false) {
        setPatchkrInfo({
          id: id,
          kr: KR,
          state: state,
          num: 2,
        });
      } else if (index1 === true && index2 === true && index3 === false) {
        setPatchkrInfo({
          id: id,
          kr: KR,
          state: state,
          num: 3,
        });
      }
    }
    setkrModalOn(!krModalOn);
  };

  const [showEmotion, setShowEmotion] = useState(false);

  return (
    <div>
      {KRArray?.map((Obdata, index) => {
        return (
          <OKRBox key={index}>
            <>
              <Objective key={Obdata.objectiveId} color={Obdata.color}>
                <div className='left'>
                  <div className='title'>O</div>
                  <div className='nameBox'>
                    <div
                      className='name'
                      onClick={() => {
                        patchOKR(
                          Obdata.objectiveId,
                          Obdata.objective,
                          Obdata.startdate,
                          Obdata.enddate,
                          Obdata.color
                        );
                      }}>
                      {Obdata.objective}
                    </div>
                    <div className='date'>
                      {Obdata.startdate} - {Obdata.enddate}
                    </div>
                  </div>
                </div>

                <div className='right'>
                  <PersentBox ObColor={Obdata.color} state='Objective'>
                    <input
                      type='range'
                      min={0}
                      max={100}
                      step={1}
                      value={Obdata.progress}
                    />
                    <div
                      className='bg'
                      style={{ width: `${Obdata.progress}%` }}></div>
                  </PersentBox>
                  <div className='percent'>{Obdata.progress}%</div>
                </div>
              </Objective>
            </>

            {Obdata.keyresult.map(data => {
              return (
                <KRBox key={data.keyResultId} color={Obdata.color}>
                  <div className='left'>
                    <div className='logo'>KR{data.krNumber}</div>
                    <div
                      className='name'
                      onClick={() => {
                        patchKR(data.keyResultId, data.keyResult, 'patch');
                      }}>
                      {data.keyResult}
                    </div>
                  </div>

                  <div className='right'>
                    <PersentBox ObColor={Obdata.color} state='KR'>
                      <input
                        type='range'
                        min={0}
                        max={100}
                        step={1}
                        value={data.progress}
                      />
                      <div
                        className='bg'
                        style={{ width: `${data.progress}%` }}></div>
                    </PersentBox>
                    <div className='percent'>{data.progress}%</div>
                  </div>
                </KRBox>
              );
            })}
            {Obdata.keyresult.length < 3 ? (
              <EmptyKR
                key={`empty-kr-${index}`}
                onClick={() => {
                  patchKR(Obdata.objectiveId, '', 'post', index);
                }}>
                KR을 추가하기
                <img className='img' src={kRAdd} alt='' />
              </EmptyKR>
            ) : null}
          </OKRBox>
        );
      })}
      <Portal>
        {okrModalOn ? (
          <OkrPatchModal
            onCloseModal={onObjectiveCloseModal}
            modalRef={okrModalRef}
            modalOutSideClick={okrModalOutSideClick}
          />
        ) : krModalOn ? (
          <KrPatchModal
            onCloseModal={onKRCloseModal}
            modalRef={krModalRef}
            modalOutSideClick={krModalOutSideClick}
          />
        ) : null}
      </Portal>
    </div>
  );
};

export default OkrItem;
