import { ModalBackground, ModalBox } from './modal.styled';
import React, { useEffect } from 'react';

const AlertModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
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

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <div>
          <p className='alertHeader'>OKR을 더 이상 생성할 수 없습니다.</p>
          <br />
          <button className='alertbtn' onClick={onCloseModal}>
            확인
          </button>
        </div>
      </ModalBox>
    </>
  );
};

export default AlertModal;
