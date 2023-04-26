import plus from '../../assets/plus.png';
import { getOKRData, userInfo } from '../../store/store.js';
import {
  Container,
  Header,
  HeaderBox,
  OkrContainer,
} from '../../styles/OKR.styled.js';
import AlertModal from '../global/globalModal/AlertModal.jsx';
import OkrModal from '../global/globalModal/OkrModal.jsx';
import Potal from '../global/globalModal/Potal.jsx';
import { NotHaveEl } from '../global/globalModal/modal.styled.js';
import OkrItem from './okr/OkrItem';
import React from 'react';
import { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';

export default function DashOKR() {
  //모달 상태관리
  const [okrModalOn, setOkrModalOn] = useState(false);
  const [alertModalOn, setAlertModalOn] = useState(false);

  const info = useRecoilValue(userInfo);
  const okrData = useRecoilValue(getOKRData);

  /**모달 닫는 함수 */
  const onCloseModal = () => {
    setOkrModalOn(!okrModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄우는 함수 */
  const createOKR = () => {
    if (okrData?.length < 4) {
      setOkrModalOn(!okrModalOn);
    } else {
      setAlertModalOn(!alertModalOn);
    }
  };

  // createModal
  const modalRef = useRef(null);
  const modalOutSideClick = e => {
    if (modalRef.current === e.target) {
      setOkrModalOn(!okrModalOn);
    }
  };

  /**모달 닫는 함수 */
  const onCloseAlertModal = () => {
    setAlertModalOn(!alertModalOn);
  };

  //alertModal
  const alertModalRef = useRef(null);
  const alertModalOutSideClick = e => {
    if (alertModalRef.current === e.target) {
      setAlertModalOn(!alertModalOn);
    }
  };

  return (
    <Container>
      <HeaderBox>
        <Header>{info?.team} OKR</Header>
        <div className='btnBox'>
          <div onClick={createOKR}>
            <img src={plus} alt='plus' />
          </div>
        </div>
      </HeaderBox>
      <OkrContainer>
        {okrData?.length === 0 ? (
          <NotHaveEl>
            <h2>설정된 OKR이 없습니다.</h2>
            <div className='btnFlex' onClick={createOKR}>
              <img src={plus} alt='plus' />
              <div>OKR추가</div>
            </div>
          </NotHaveEl>
        ) : (
          <OkrItem />
        )}
      </OkrContainer>
      <Potal>
        {okrModalOn && (
          <OkrModal
            onCloseModal={onCloseModal}
            modalRef={modalRef}
            modalOutSideClick={modalOutSideClick}
          />
        )}
      </Potal>
      <Potal>
        {alertModalOn && (
          <AlertModal
            onCloseModal={onCloseAlertModal}
            modalRef={alertModalRef}
            modalOutSideClick={alertModalOutSideClick}
          />
        )}
      </Potal>
    </Container>
  );
}
