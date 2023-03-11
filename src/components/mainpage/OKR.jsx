import React from 'react';
import Potal from '../global/globalmodal/Potal.jsx';
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

import plus from '../../assets/plus.png';
import more from '../../assets/more.png';

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
        <div className='btnBox'>
          <div onClick={createOKR}>
            <img src={plus} alt='' />
          </div>
          <div>
            <img src={more} alt='' />
          </div>
        </div>
      </HeaderBox>
      {/* <Container2> */}
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
            <div className='btnFlex' onClick={createOKR}>
              <img src={plus} alt='' />
              <div>OKR추가</div>
            </div>
          </NotHave>
        )}
      </OkrContainer>
      {/* </Container2> */}
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
