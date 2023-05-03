import { DeleteKR } from '../../../apis/apiDELETE';
import { PatchKR } from '../../../apis/apiPATCH';
import { CreateKR } from '../../../apis/apiPOST';
import close from '../../../assets/close.png';
import info from '../../../assets/info.png';
import kr from '../../../assets/kr.png';
import trash from '../../../assets/trash.png';
import { patchKRInfo } from '../../../store/store';
import { KRBox, ModalBackground, ModalBox, OKRBox } from './modal.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useRecoilValue } from 'recoil';

const KrPatchModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  const queryClient = useQueryClient();

  const krInfo = useRecoilValue(patchKRInfo);

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

  const { mutate: patchKRMutate } = useMutation(PatchKR, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'KR 수정',
        });
      }
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      if (response.response.data === '입력된 핵심결과 없습니다.') {
        alert('입력된 KR 내용이 없습니다.');
      } else {
        alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
      }
    },
  });

  const [title, setTitle] = useState({
    krNumber: krInfo.num,
    keyResult: krInfo.kr,
  });

  const { mutate: deleteKR } = useMutation(DeleteKR, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'KR 삭제',
        });
      }
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const { mutate: postKR } = useMutation(CreateKR, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'KR 생성',
        });
      }
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const createKr = () => {
    if (title.keyResult === '') {
      alert('KR이 입력되지 않았습니다.');
    } else if (krInfo.state === 'patch') {
      const id = krInfo.id;
      const value = title;
      patchKRMutate({ value, id });
    } else if (krInfo.state === 'post') {
      const id = krInfo.id;
      const value = title;
      console.log(title);
      console.log(value);
      postKR({ value, id });
    }
  };

  const deleteKr = () => {
    const result =
      window.confirm(`|KR - 핵심결과]와 연동된 To-Do가 있다면 연동 해제됩니다.
    정말 삭제하시겠습니까?`);
    if (result) {
      deleteKR(krInfo.id);
    } else {
    }
  };

  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseOverHandler = () => {
    setShowTooltip(true);
  };
  const onMouseOutHandler = () => {
    setShowTooltip(false);
  };

  const onChangeKR = e => {
    setTitle({ ...title, keyResult: e.target.value });
    if (e.target.value === '') {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    if (showTooltip && title.keyResult === '') {
      setShowTooltip(true);
    } else if (title.keyResult !== '') {
      setShowTooltip(false);
    } else {
      setShowTooltip(false);
    }
  }, [showTooltip, title]);

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <div className='header'>
          {krInfo.state === 'patch' ? (
            <h2>Key Result 수정</h2>
          ) : (
            <h2>Key Result 추가</h2>
          )}
          <img src={close} alt='clsoe' onClick={onCloseModal} />
        </div>

        <KRBox>
          <div className='kr itemBox'>
            <img src={kr} alt='kr' />
            <input
              type='text'
              placeholder='ex. 고객 후기 5점 만점에 4.5점 만들기'
              name='first'
              onMouseOver={onMouseOverHandler}
              onMouseOut={onMouseOutHandler}
              value={title.keyResult}
              // onChange={event => {
              //   onChangeKR(event);
              // }}
              onChange={onChangeKR}
            />
          </div>

          {showTooltip && (
            <div className='krTooltip'>
              <img src={info} alt='info' />
              <p>Key Result : Objective를 달성하기 위한 정량적인 측정 지표</p>
            </div>
          )}
        </KRBox>

        <div className='btnBox'>
          <button onClick={onCloseModal} className='cancel'>
            취소
          </button>
          <button onClick={createKr} className='next'>
            확인
          </button>
          {krInfo.state === 'patch' ? (
            <div
              className='deletebtn'
              onClick={() => {
                deleteKr();
              }}>
              <img className='deleteImg' src={trash} alt='' />
              <p className='deleteName'>삭제</p>
            </div>
          ) : null}
        </div>
      </ModalBox>
    </>
  );
};

export default KrPatchModal;
