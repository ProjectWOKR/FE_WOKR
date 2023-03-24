import React, { useEffect, useState } from 'react';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';
import close from '../../../assets/close.png';
import kr from '../../../assets/kr.png';
import trash from '../../../assets/trash.png';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchKR } from '../../../apis/apiPATCH';
import { useRecoilValue } from 'recoil';
import { patchKRInfo } from '../../../store/store';
import { DeleteKR } from '../../../apis/apiDELETE';
import { CreateKR } from '../../../apis/apiPOST';

const KrPatchModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  const queryClient = useQueryClient();

  const krInfo = useRecoilValue(patchKRInfo);
  // console.log(krInfo);

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
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const [title, setTitle] = useState({
    krNumber: krInfo.num,
    keyResult: krInfo.kr,
  });

  const onChangeKR = e => {
    console.log(e.target.value);
    setTitle({ ...title, keyResult: e.target.value });
  };

  const { mutate: deleteKR } = useMutation(DeleteKR, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const { mutate: postKR } = useMutation(CreateKR, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });
  // console.log(krInfo);

  const createKr = () => {
    if (krInfo.state === 'patch') {
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
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0정말 삭제하시겠습니까?`);
    if (result) {
      deleteKR(krInfo.id);
    } else {
      // 취소 버튼을 클릭한 경우, 여기에 로직을 작성합니다.
    }
  };

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <div className='header'>
          <h2>KR 추가/수정</h2>
          <img src={close} alt='' onClick={onCloseModal} />
        </div>

        <OKRBox>
          <div className='kr itemBox'>
            <img src={kr} alt='' />
            <input
              type='text'
              placeholder='핵심결과를 작성하세요.'
              name='first'
              value={title.keyResult}
              onChange={event => {
                onChangeKR(event);
              }}
            />
          </div>
        </OKRBox>
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
