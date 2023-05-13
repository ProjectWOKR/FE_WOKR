import { GetOKR } from '../../apis/apiGET';
import plus from '../../assets/plus.png';
import { userDetail } from '../../store/store.js';
import {
  Container,
  Header,
  HeaderBox,
  OkrContainer,
} from '../../styles/OKR.styled.js';
import OkrModal from '../global/globalModal/OkrModal.jsx';
import Potal from '../global/globalModal/Potal.jsx';
import { NotHaveEl } from '../global/globalModal/modal.styled.js';
import OkrItem from './okr/OkrItem';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function DashOKR() {
  //모달 상태관리
  const [okrModalOn, setOkrModalOn] = useState(false);
  const [alertModalOn, setAlertModalOn] = useState(false);

  const info = useRecoilValue(userDetail);
  // const okrData = useRecoilValue(getOKRData);

  const { getokrdata } = useQuery(['OKR'], GetOKR, {
    onSuccess: data => {
      // console.log(data);
    },
  });

  /**모달 닫는 함수 */
  const onCloseModal = () => {
    setOkrModalOn(!okrModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄우는 함수 */
  const createOKR = () => {
    if (getokrdata?.length < 4) {
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
  // const onCloseAlertModal = () => {
  //   setAlertModalOn(!alertModalOn);
  // };

  //alertModal
  // const alertModalRef = useRef(null);
  // const alertModalOutSideClick = e => {
  //   if (alertModalRef.current === e.target) {
  //     setAlertModalOn(!alertModalOn);
  //   }
  // };

  // const setOkrList = useSetRecoilState(getOKRData);

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
        {getokrdata?.length === 0 ? (
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

      {/* <Potal>
        {alertModalOn && (
          <AlertModal
            onCloseModal={onCloseAlertModal}
            modalRef={alertModalRef}
            modalOutSideClick={alertModalOutSideClick}
          />
        )}
      </Potal> */}
    </Container>
  );
}
