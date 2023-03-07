import React from 'react';
import Potal from '../global/globalModal/Potal';
import { useState, useRef } from 'react';
import Kr from './Kr';
import OkrObject from './OkrItem';
import {
  Container,
  Container2,
  CreateBtn,
  Header,
  HeaderBox,
  OkrContainer,
  OkrItem,
} from './OKR.styled';
import OkrModal from '../global/globalModal/OkrModal';

export default function OKR() {
  //모달 상태관리
  const [modalOn, setModalOn] = useState(false);
  // console.log(modalOn);
  const onCloseModal = () => {
    setModalOn(!modalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const createOKR = () => {
    setModalOn(!modalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const modalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const modalOutSideClick = e => {
    if (modalRef.current === e.target) {
      setModalOn(!modalOn);
    }
  };

  return (
    <Container>
      <HeaderBox>
        <Header>팀 OKR</Header>
        <CreateBtn onClick={createOKR}>+</CreateBtn>
      </HeaderBox>
      <Container2>
        <OkrContainer>
          <OkrItem>
            <OkrObject />
            <Kr />
            <Kr />
          </OkrItem>
          <OkrItem>
            <OkrObject />
            <Kr />
            <Kr />
            <Kr />
          </OkrItem>
        </OkrContainer>
      </Container2>
      <Potal>
        {modalOn && (
          <OkrModal
            onCloseModal={onCloseModal}
            modalRef={modalRef}
            modalOutSideClick={modalOutSideClick}
          />
        )}
      </Potal>
    </Container>
  );
}
