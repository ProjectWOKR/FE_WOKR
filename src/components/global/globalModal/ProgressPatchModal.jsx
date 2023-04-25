import {
  PatchKRProgress,
  PatchObjectiveProgress,
} from '../../../apis/apiPATCH';
import close from '../../../assets/close.png';
import kr from '../../../assets/kr.png';
import { trackEvent } from '../../../router/RouteChangeTracker';
import { patchProgressInfo } from '../../../store/store';
import { PatchPersentBox, PesentContainer } from '../../../styles/OKR.styled';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useRecoilValue } from 'recoil';

const ProgressPatchModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  useEffect(() => {
    const handleBeforeUnload = e => {
      e.preventDefault();
      e.returnValue =
        '현재 입력중인 항목이 있습니다. 정말 새로고침 하시겠습니까?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const queryClient = useQueryClient();

  const progressInfo = useRecoilValue(patchProgressInfo);

  const [rangeInfo, setRangeInfo] = useState({ progress: progressInfo.value });

  // 모달 스크롤 방지
  useEffect(() => {
    // 현재 위치에 고정시킴
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      // 모달이 false면 style을  지우고 원래 있던 위치로 돌려주기
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      //-숫자px 형식으로나와서 파싱 후 음수를 정수로 바꾸기 위해 *-1
      window.scrollTo(0, parseInt(scrollY, 10) * -1);
    };
  }, []);

  const { mutate: PatchObjectMutate } = useMutation(PatchObjectiveProgress, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 진척도 수정',
        });
      }

      queryClient.invalidateQueries(['OKR']);
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const { mutate: PatchKRMutate } = useMutation(PatchKRProgress, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'KR 진척도 수정',
        });
      }
      queryClient.invalidateQueries(['OKR']);
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const patchProgress = () => {
    let id = progressInfo.id;
    let value = rangeInfo;
    if (progressInfo.state === 'Objective') {
      PatchObjectMutate({ value, id });
      onCloseModal();
    }
    if (progressInfo.state === 'KR') {
      PatchKRMutate({ value, id });
      onCloseModal();
    }
  };

  const onChangeProgress = e => {
    setRangeInfo({ progress: e.target.value });
  };

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <div className='patchheader'>진척도 수정</div>
        <PesentContainer>
          <PatchPersentBox ObColor={progressInfo.color} state='Patch'>
            <input
              type='range'
              value={rangeInfo.progress}
              min='0'
              max='100'
              step='1'
              onChange={onChangeProgress}
            />
            <div
              className='bg'
              style={{ width: `${rangeInfo.progress}%` }}></div>
            <div className='rangeInfo'>{rangeInfo.progress}</div>
          </PatchPersentBox>
        </PesentContainer>
        <div className='btnBox'>
          <br />
          <button onClick={onCloseModal} className='cancel'>
            취소
          </button>
          <button onClick={patchProgress} className='next'>
            확인
          </button>
        </div>
      </ModalBox>
    </>
  );
};

export default ProgressPatchModal;
