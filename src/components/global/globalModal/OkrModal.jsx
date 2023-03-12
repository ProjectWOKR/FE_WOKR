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

  // console.log(objInfo);

  const [startDate, setStartDate] = useState({ format: 'MM/DD/YYYY' });
  // console.log(startDate);
  const [endDate, setEndDate] = useState({ format: 'MM/DD/YYYY' });

  //startDate 변환 함수
  const convertStart = (date, format = startDate.format) => {
    let object = { date, format };
    setStartDate(new DateObject(object).format());

    setObjInfo({ ...objInfo, startdate: new DateObject(object).format() });
    // console.log('start :', startDate);
  };

  //endDate 변환 함수
  const convertEnd = (date, format = startDate.format) => {
    let object = { date, format };

    setEndDate(new DateObject(object).format());
    // console.log('end :', endDate);

    setObjInfo({ ...objInfo, enddate: new DateObject(object).format() });
  };

  const [haveObj, setHaveObj] = useState(false);

  const onSubmit = () => {
    // setObjInfo({ ...objInfo, enddate: endDate, startdate: startDate });
    setHaveObj(!haveObj);
    // console.log(objInfo);
    creObjectiveMutate(objInfo);
  };

  // console.log(objInfo);
  //팝업
  // const PopUp = () => {};
  // useEffect(() => {
  //   // console.log(objInfo.objective.length);

  //   const throwError = async () => {
  //     if (objInfo.objective.length >= 5) {
  //       setTimeout(() => {
  //         return (
  //           <Potal>
  //             <ErrorPopUp>30자 이상 입력할 수 없습니다.</ErrorPopUp>;
  //           </Potal>
  //         );
  //       }, 1000);
  //     }
  //   };
  //   throwError();
  // }, [objInfo]);

  // return <div></div>

  // if (objInfo.objective.length >= 30) {
  // }

  const { mutate: creObjectiveMutate } = useMutation(CreateObjective, {
    onSuccess: response => {
      console.log(response);
    },
    onError: response => {
      console.log(response);
    },
  });

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
                <input type='text' placeholder='핵심결과' className='input' />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input type='text' placeholder='핵심결과' className='input' />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input type='text' placeholder='핵심결과' className='input' />
              </div>
            </OKRBox>

            <div className='btnBox'>
              <button onClick={onCloseModal} className='cancel'>
                취소
              </button>
              <button onClick={onSubmit} className='next'>
                저장
              </button>
              <ErrorPopUp>30자 이상 입력할 수 없습니다.</ErrorPopUp>;
            </div>
            {/* {objInfo.objective.length >= 5 ? (
              <Potal>
                <ErrorPopUp>30자 이상 입력할 수 없습니다.</ErrorPopUp>;
              </Potal>
            ) : null} */}
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
              <button onClick={onSubmit} className='next'>
                다음
              </button>
            </div>
          </>
        )}
      </ModalBox>
    </>
  );
};

export default OkrModal;
