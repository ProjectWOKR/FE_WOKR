import React, { useEffect, useState } from 'react';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';
import close from '../../../assets/close.png';
import kr from '../../../assets/kr.png';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchKR } from '../../../apis/apiPATCH';
import { useRecoilValue } from 'recoil';
import { patchKRInfo } from '../../../store/store';

const KrPatchModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  const queryClient = useQueryClient();

  const krInfo = useRecoilValue(patchKRInfo);
  console.log(krInfo);

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
    onError: response => {},
  });

  const [title, setTitle] = useState({ keyResult: krInfo.kr });

  const onChangeKR = e => {
    console.log(e.target.value);
    setTitle({ keyResult: e.target.value });
  };

  const createKr = () => {
    const id = krInfo.id;
    const value = title;
    patchKRMutate({ value, id });
  };

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <div className='header'>
          <h2>OKR 추가 - 핵심 결과</h2>
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
        </div>
      </ModalBox>
    </>
  );
};

export default KrPatchModal;
