import React from 'react';
import Potal from '../global/globalmodal/Potal';
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
import OkrModal from '../global/globalmodal/OkrModal';
import { NotHave } from '../global/globalmodal/modal.styled';

import eye from '../../assets/closedEye.png';

export default function OKR() {
  //모달 상태관리
  const [okrModalOn, setOkrModalOn] = useState(false);
  /**모달 닫는 함수 */
  const onCloseModal = () => {
    setOkrModalOn(!okrModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const createOKR = () => {
    setOkrModalOn(!okrModalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const modalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const modalOutSideClick = e => {
    if (modalRef.current === e.target) {
      setOkrModalOn(!okrModalOn);
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
          {/* <OkrItem>
            <OkrObject />
            <Kr />
            <Kr />
          </OkrItem>
          <OkrItem>
            <OkrObject />
            <Kr />
            <Kr />
            <Kr />
          </OkrItem> */}
          {!OkrItem ? (
            <>
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
            </>
          ) : (
            <NotHave>
              <h2>설정된 OKR이 없습니다.</h2>
              <button onClick={createOKR}>추가하기</button>
            </NotHave>
          )}
        </OkrContainer>
      </Container2>
      <Potal>
        {okrModalOn && (
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
