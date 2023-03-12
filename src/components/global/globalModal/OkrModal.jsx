import React, { useEffect, useState } from 'react';
import { ErrorPopUp, ModalBackground, ModalBox, OKRBox } from './modal.styled';

import DatePicker, { DateObject, toDateObject } from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
// import InputIcon from 'react-multi-date-picker/components/input_icon';

import close from '../../../assets/close.png';
import object from '../../../assets/object.png';
import kr from '../../../assets/kr.png';
import notFillPlus from '../../../assets/notfillPlus.png';
import calender from '../../../assets/calender.png';

import start from '../../../assets/start.png';
import startHover from '../../../assets/startHover.png';
import ColorDropDown from '../globaldropdown/ColorDropDown';
import { OnChange } from '../onChange';
import Potal from './Potal';

import { CreateObjective } from '../../../apis/apiPOST';
import { useMutation } from '@tanstack/react-query';

const OkrModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const format = 'YYYY-MM-DD';

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

  const [objInfo, setObjInfo] = useState({
    objective: '',
    startdate: '',
    enddate: '',
    color: '',
  });

  const [startDate, setStartDate] = useState({ format: 'MM/DD/YYYY' });
  const [endDate, setEndDate] = useState({ format: 'MM/DD/YYYY' });

  //startDate 변환 함수
  const convertStart = (date, format = startDate.format) => {
    let object = { date, format };
    setStartDate(new DateObject(object).format());
    setObjInfo({ ...objInfo, startdate: new DateObject(object).format() });
  };

  //endDate 변환 함수
  const convertEnd = (date, format = startDate.format) => {
    let object = { date, format };
    setEndDate(new DateObject(object).format());
    setObjInfo({ ...objInfo, enddate: new DateObject(object).format() });
  };

  // Object가 있는지 여부
  const [haveObj, setHaveObj] = useState(false);

  const [popUp, setPopUp] = useState(false);
  // console.log(objInfo);

  const createO = () => {
    creObjectiveMutate(objInfo);
    setHaveObj(true);

    // const startd = new Date(objInfo.startdate);
    // const endd = new Date(objInfo.enddate);

    // if (objInfo.objective === '') {
    //   setPopUp(true)
    //   console.log('목표 작성해');
    //   return <ErrorPopUp>O 목표를 작성해 주세요.</ErrorPopUp>;
    // } else if (objInfo.objective.length >= 30) {
    //   console.log('30보다 적게해');
    //   return <ErrorPopUp>30자 이상 입력할 수 없습니다.</ErrorPopUp>;
    // } else if (objInfo.startdate === '') {
    //   console.log('시작 날짜 입력해');
    //   return <ErrorPopUp>시작일을 선택해 주세요.</ErrorPopUp>;
    // } else if (objInfo.startdate !== '' && objInfo.enddate === '') {
    //   console.log('종료 날짜 입력해');
    //   return <ErrorPopUp>종료일을 선택해 주세요.</ErrorPopUp>;
    // } else if (endd < startd) {
    //   console.log('빠르게 설정할 수 없어');
    //   return (
    //     <ErrorPopUp>종료일은 시작일보다 빠르게 설정할 수 없습니다.</ErrorPopUp>
    //   );
    // } else if (objInfo.color === '') {
    //   console.log('색은 기본값');
    //   setObjInfo({ ...objInfo, color: '#9B9B9B' });
    // } else {
    //   setPopUp(false);
    // }
  };

  const { mutate: creObjectiveMutate } = useMutation(CreateObjective, {
    onSuccess: response => {
      console.log(response);
      // setHaveObj(true);
    },
    onError: response => {
      console.log(response);
    },
  });

  const [creKr, setCreKr] = useState({
    keyResultDate: '',
  });

  const [title, setTitle] = useState([]);
  const onChange = e => {
    const { name, value } = e.target;
    setTitle({ ...title, [name]: value });
  };

  const array = Object.values(title);

  const createKr = () => {
    setCreKr({ ...creKr, keyResultDate: array });
    console.log(creKr);
    // console.log('kr 저장');
  };

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        {haveObj ? (
          <>
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
                  className='input'
                  name='one'
                  onChange={onChange}
                />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input
                  type='text'
                  placeholder='핵심결과를 작성하세요.'
                  className='input'
                  name='two'
                  onChange={onChange}
                />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input
                  type='text'
                  placeholder='핵심결과를 작성하세요.'
                  className='input'
                  name='three'
                  onChange={onChange}
                />
              </div>
            </OKRBox>
            <div className='btnBox'>
              <button onClick={onCloseModal} className='cancel'>
                취소
              </button>
              <button onClick={createKr} className='next'>
                저장
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='header'>
              <h2>OKR 추가 - 목표, 기간, 색상</h2>
              <img src={close} alt='' onClick={onCloseModal} />
            </div>
            <OKRBox>
              <div className='object itemBox'>
                <img src={object} alt='' />
                <input
                  type='text'
                  placeholder='목표'
                  className='input'
                  name='objective'
                  onChange={event => {
                    OnChange(event, objInfo, setObjInfo);
                  }}
                />
              </div>

              {/* <div className='kr itemBox'>
              <img src={kr} alt='' />
              <input type='text' placeholder='핵심결과' className='input' />
              <img src={notFillPlus} alt='' className='plus' />
            </div> */}

              <div className='date'>
                <img src={calender} alt='' />
                <div className='dateBox'>
                  <DatePicker
                    inputClass='start-input'
                    containerClassName='start-container'
                    months={months}
                    weekDays={weekDays}
                    format={format}
                    placeholder='시작일'
                    value={startDate.date}
                    onChange={convertStart}
                    animations={[
                      opacity(),
                      transition({
                        from: 40,
                        transition:
                          'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                      }),
                    ]}
                  />

                  <DatePicker
                    inputClass='end-input'
                    containerClassName='end-container'
                    months={months}
                    weekDays={weekDays}
                    format={format}
                    placeholder='종료일'
                    value={endDate.date}
                    onChange={convertEnd}
                    animations={[
                      opacity(),
                      transition({
                        from: 40,
                        transition:
                          'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                      }),
                    ]}
                  />
                </div>
                <div className='colorBox'>
                  <div
                    className='color'
                    style={{ backgroundColor: `${objInfo.color}` }}
                  />
                  <ColorDropDown objInfo={objInfo} setObjInfo={setObjInfo} />
                </div>
              </div>
            </OKRBox>
            <div className='btnBox'>
              <button onClick={onCloseModal} className='cancel'>
                취소
              </button>
              <button onClick={createO} className='next'>
                다음
              </button>
            </div>
            {popUp ? <ErrorPopUp /> : null}
          </>
        )}
      </ModalBox>
    </>
  );
};

export default OkrModal;
