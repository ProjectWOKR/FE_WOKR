import React, { useState, useRef, useEffect } from 'react';
import {
  OKRBox,
  Objective,
  OKRSpace,
  KRBox,
  EmptyKR,
  PersentBox,
} from './OKR.styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Portal from '../global/globalModal/Potal';
import OkrPatchModal from '../global/globalModal/OkrPatchModal';
import KrPatchModal from '../global/globalModal/KrPatchModal';
import ProgressPatchModal from '../global/globalModal/ProgressPatchModal';
import { GetKR, GetOKR } from '../../apis/apiGET.js';
import { PatchObjectiveProgress } from '../../apis/apiPATCH';
import {
  patchOKRInfo,
  patchKRInfo,
  patchProgressInfo,
  IsOpen,
} from '../../store/store';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import kRAdd from '../../assets/KRAdd.png';
import Emotion from '../global/globaldropdown/Emotion';

const OkrObject = () => {
  const queryClient = useQueryClient();
  const [okrModalOn, setOkrModalOn] = useState(false);
  const [krModalOn, setkrModalOn] = useState(false);
  const [progressModalOn, setprogressModalOn] = useState(false);
  const setPatchOkrInfo = useSetRecoilState(patchOKRInfo);
  const setPatchkrInfo = useSetRecoilState(patchKRInfo);
  const setPatchProgressInfo = useSetRecoilState(patchProgressInfo);
  const [openDropdownId, setOpenDropdownId] = useState(null);

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
    setPatchProgressInfo({ id: id, value: value, state: state, color: color });
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

  // const [slicedArray, setSlicedArray] = useState([]);
  const [KRArray, setKRArray] = useState([]);
  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {
      // console.log(response);
      // setSlicedArray(response?.slice(0, 2));
      const newArray = response.map(data => {
        const newKRArray = [...data.keyresult];
        newKRArray.sort((a, b) => a.krNumber - b.krNumber);
        return {
          ...data,
          keyresult: newKRArray,
        };
      });
      setKRArray(newArray);
      // console.log(KRArray);
    },
    onError: response => {},
    enabled: true,
  });

  useEffect(() => {});
  /** +버튼 누르면 KR 생성하는 모달 띄움 */
  const patchKR = (id, KR, state, index) => {
    // console.log('kr', id, KR, state, index);
    // console.log(patchKRInfo);
    // console.log('okr', getOKRData[index]);
    //test
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
        // console.log('fn', forNum);
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
      // console.log('index', index1, index2, index3);
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

  return (
    <div>
      {KRArray?.map((Obdata, index) => {
        return (
          <OKRBox key={index}>
            <>
              <Objective key={Obdata.objectiveId} color={Obdata.color}>
                <div className='Box'>
                  <div className='Logo'>O</div>
                </div>
                <div className='NameBox'>
                  <div
                    className='Name'
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
                  <div className='Cal'>
                    {Obdata.startdate} - {Obdata.enddate}
                  </div>
                </div>

                <PersentBox
                  ObColor={Obdata.color}
                  state='Objective'
                  onClick={() => {
                    patchProgress(
                      Obdata.objectiveId,
                      Obdata.progress,
                      'Objective',
                      Obdata.color
                    );
                  }}>
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
                <div className='background' />
                <div className='percent'>{Obdata.progress}%</div>
              </Objective>
            </>
            {Obdata.keyresult.map(data => {
              return (
                <KRBox key={data.keyResultId} color={Obdata.color}>
                  <div className='Logo'>KR{data.krNumber}</div>
                  <div
                    className='Name'
                    onClick={() => {
                      patchKR(data.keyResultId, data.keyResult, 'patch');
                    }}>
                    {data.keyResult}
                  </div>
                  <PersentBox
                    onClick={() => {
                      patchProgress(
                        data.keyResultId,
                        data.progress,
                        'KR',
                        Obdata.color
                      );
                    }}
                    ObColor={Obdata.color}
                    state='KR'>
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

                  <OKRSpace />
                  <div className='percent'>{data.progress}%</div>
                  <div className='right'>
                    <div className='emotionBox'>
                      {KRArray && (
                        <Emotion
                          keyResultId={data.keyResultId}
                          emotionState={data.emotion}
                          openDropdownId={openDropdownId}
                          setOpenDropdownId={setOpenDropdownId}
                        />
                      )}
                    </div>
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
        ) : progressModalOn ? (
          <ProgressPatchModal
            onCloseModal={onProgressCloseModal}
            modalRef={progressModalRef}
            modalOutSideClick={progressModalOutSideClick}
          />
        ) : null}
      </Portal>
    </div>
  );
};

export default OkrObject;
