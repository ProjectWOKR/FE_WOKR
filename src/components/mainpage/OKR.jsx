import { GetOKR, GetTeamInfo, GetUserInfo } from '../../apis/apiGET.js';
import plus from '../../assets/plus.png';
import AlertModal from '../global/globalModal/AlertModal.jsx';
import OkrModal from '../global/globalModal/OkrModal.jsx';
import Potal from '../global/globalModal/Potal.jsx';
import { NotHave } from '../global/globalModal/modal.styled';
import { Container, Header, HeaderBox, OkrContainer } from './OKR.styled';
import OkrObject from './OkrItem';
import { useQuery } from '@tanstack/react-query';
import jwt_decode from 'jsonwebtoken/decode';
import { useEffect } from 'react';
import React from 'react';
import { useState, useRef } from 'react';

export default function OKR() {
  //모달 상태관리
  const [okrModalOn, setOkrModalOn] = useState(false);
  const [alertModalOn, setAlertModalOn] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accesstoken')
  );
  const [uid, setUid] = useState(null);
  const [position, setPosition] = useState('');
  // console.log('uid :', uid);

  useEffect(() => {
    const decodeToken = jwt_decode(accessToken);
    const extractedUid = decodeToken.userId;
    setUid(extractedUid);
    // console.log('useEffect');
  }, [accessToken]);

  const { data: userInfo } = useQuery(['userInfo'], () => GetUserInfo(uid), {
    enabled: !!uid,
    // console.log(enabled)
    onSuccess: response => {
      // console.log(response);
      // console.log('통신');
      setTeamName(response.team);
      setPosition(response.teamposition);
    },
  });

  const { data: getOKRData } = useQuery(['OKR'], GetOKR, {
    onSuccess: response => {},
    onError: response => {},
  });

  /**모달 닫는 함수 */
  const onCloseModal = () => {
    setOkrModalOn(!okrModalOn);
  };

  /** +버튼 누르면 OKR 생성하는 모달 띄움 */
  const createOKR = () => {
    if (position === '팀장') {
      if (getOKRData.length < 4) {
        setOkrModalOn(!okrModalOn);
      } else {
        setAlertModalOn(!alertModalOn);
      }
    } else {
      alert('팀장만 OKR 생성 가능합니다.');
    }
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const modalRef = useRef(null);
  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const modalOutSideClick = e => {
    if (modalRef.current === e.target) {
      setOkrModalOn(!okrModalOn);
    }
  };

  /**모달 닫는 함수 */
  const onCloseAlertModal = () => {
    setAlertModalOn(!alertModalOn);
  };

  // 모달 외 클릭시 닫기위해 ref생성
  const alertModalRef = useRef(null);

  /** 모달위에 있는 배경이랑 ref가 같으면 modalOn을 false로 바꾸는 함수 */
  const alertModalOutSideClick = e => {
    if (alertModalRef.current === e.target) {
      setAlertModalOn(!alertModalOn);
    }
  };

  return (
    <Container>
      <HeaderBox>
        <Header>{teamName} OKR</Header>
        <div className='btnBox'>
          <div onClick={createOKR}>
            <img src={plus} alt='' />
          </div>
        </div>
      </HeaderBox>
      <OkrContainer>
        {getOKRData?.length === 0 ? (
          <NotHave>
            <h2>설정된 OKR이 없습니다.</h2>
            <div className='btnFlex' onClick={createOKR}>
              <img src={plus} alt='' />
              <div>OKR추가</div>
            </div>
          </NotHave>
        ) : (
          <OkrObject />
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
