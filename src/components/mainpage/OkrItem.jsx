import React, { useState, useRef } from 'react';
import { OKRBox, Objective, OKRSpace, KRBox, EmptyKR } from './OKR.styled';
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

  /** +버튼 누르면 KR 생성하는 모달 띄움 */
  const patchKR = (id, KR) => {
    // console.log(id, KR);
    setPatchkrInfo({
      id: id,
      kr: KR,
    });
    setkrModalOn(!krModalOn);
  };

  /**KR 모달 닫는 함수 */
  const onProgressCloseModal = () => {
    setprogressModalOn(!progressModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const patchProgress = (id, value, state) => {
    setPatchProgressInfo({ id: id, value: value, state: state });
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

  const [slicedArray, setSlicedArray] = useState([]);
  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {
      setSlicedArray(response?.slice(0, 2));
    },
    onError: response => {},
  });
  return (
    <div>
      {slicedArray?.map((data, index) => {
        const color = index % 2 === 0 ? 'red' : 'blue';
        return (
          <OKRBox key={index}>
            <>
              <Objective key={data.objectiveId} color={color}>
                <div className='left'>
                  <div className='box'>
                    <div className='logo'>O</div>
                  </div>
                  <div className='nameBox'>
                    <div className='name'>{data.objective}</div>
                    <div className='cal'>
                      {data.startdate} - {data.enddate}
                    </div>
                  </div>
                </div>

                <div className='objRight'>
                  <input
                    className='range'
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    value={data.progress}
                    onClick={() => {
                      patchProgress(
                        data.objectiveId,
                        data.progress,
                        'Objective'
                      );
                    }}
                  />

                  <div className='percent'>{data.progress}%</div>
                </div>
                <button
                  className='patchbtn'
                  onClick={() => {
                    patchOKR(
                      data.objectiveId,
                      data.objective,
                      data.startdate,
                      data.enddate,
                      data.color
                    );
                  }}>
                  수정
                </button>
              </Objective>

              {data.keyresult.length === 0 ? (
                <>
                  <EmptyKR>
                    KR을 추가하기
                    <img className='img' src={kRAdd} alt='' />
                  </EmptyKR>
                </>
              ) : (
                data?.keyresult.map((KR, index) => {
                  return KR.keyResult !== '' ? (
                    <KRBox key={KR.keyResultId} color={color}>
                      <div className='krLeft'>
                        <div className='logo'>KR{index + 1}</div>
                        <div className='name'>{KR.keyResult}</div>
                      </div>

                      <div className='right'>
                        <input
                          className='range'
                          type='range'
                          min='0'
                          max='100'
                          step='1'
                          value={KR.progress}
                          onClick={() => {
                            patchProgress(KR.keyResultId, KR.progress, 'KR');
                          }}
                        />
                        <div className='percent'>{KR.progress}%</div>
                        <div className='emotionBox'>
                          {slicedArray && (
                            <Emotion
                              keyResultId={KR.keyResultId}
                              emotionState={KR.emotion}
                            />
                          )}
                        </div>
                      </div>
                      <button
                        className='patchbtn'
                        onClick={() => {
                          patchKR(KR.keyResultId, KR.keyResult);
                        }}>
                        수정
                      </button>
                    </KRBox>
                  ) : (
                    <EmptyKR>
                      KR을 추가하기
                      <img className='img' src={kRAdd} alt='' />
                    </EmptyKR>
                  );
                })
              )}
            </>
          </OKRBox>
        );
      })}
      <Portal>
        {/* {okrModalOn(
          <OkrPatchModal
            onCloseModal={onObjectiveCloseModal}
            modalRef={okrModalRef}
            modalOutSideClick={okrModalOutSideClick}
          />
        )}
      </Portal>
      <Portal>
        {krModalOn && (
          <KrPatchModal
            onCloseModal={onKRCloseModal}
            modalRef={krModalRef}
            modalOutSideClick={krModalOutSideClick}
          />
        )}
      </Portal>
      <Portal>
        {progressModalOn && (
          <ProgressPatchModal
            onCloseModal={onProgressCloseModal}
            modalRef={progressModalRef}
            modalOutSideClick={progressModalOutSideClick}
          />
        )} */}
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

    // <Test />
  );
};

export default OkrObject;
