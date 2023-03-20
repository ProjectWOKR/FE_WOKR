import React, { useEffect, useState } from 'react';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';

import DatePicker, { DateObject } from 'react-multi-date-picker';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';

import close from '../../../assets/close.png';
import object from '../../../assets/object.png';
import kr from '../../../assets/kr.png';
import calender from '../../../assets/calender.png';

import ColorDropDown from '../globaldropdown/ColorDropDown';
import { OnChange } from '../onChange';

import { CreateObjective, CreateKR } from '../../../apis/apiPOST';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from '../Toast';
import { toast } from 'react-toastify';
// import { reactDom } from 'react-dom';

const OkrModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  const queryClient = useQueryClient();
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
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
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
  const convertEnd = (date, format = endDate.format) => {
    let object = { date, format };
    setEndDate(new DateObject(object).format());
    setObjInfo({ ...objInfo, enddate: new DateObject(object).format() });
  };

  // Object가 있는지 여부----- 추후 수정
  const [haveObj, setHaveObj] = useState(false);
  // console.log(objInfo);

  const createO = () => {
    const startd = new Date(objInfo.startdate);
    const endd = new Date(objInfo.enddate);

    if (objInfo.objective === '') {
      return toast('목표를 작성해 주세요.');
    } else if (objInfo.objective.length >= 30) {
      return toast('30자 이상 입력할 수 없습니다.');
    } else if (objInfo.startdate === '') {
      return toast('시작일을 선택해 주세요.');
    } else if (objInfo.startdate !== '' && objInfo.enddate === '') {
      return toast('종료일을 선택해 주세요.');
    } else if (endd < startd) {
      return toast('종료일은 시작일보다 빠르게 설정할 수 없습니다.');
    } else if (objInfo.color === '') {
      toast('색상을 선택해 주세요.');
    } else {
      console.log('성공');
      createObjectiveMutate(objInfo);
      setHaveObj(true);
    }
  };
  const [objectId, setObjectId] = useState();

  const { mutate: createObjectiveMutate } = useMutation(CreateObjective, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      setObjectId(response.objectiveId);
      console.log('rr', response);
    },
    onError: response => {},
  });

  const { mutate: createKrMutate } = useMutation(CreateKR, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      onCloseModal();
    },
    onError: response => {},
  });

  const [title, setTitle] = useState({ keyResultDate: ['', '', ''] });

  const onChangeKR = (e, index) => {
    if (index === 0) {
      const tempTitle = { ...title };
      tempTitle.keyResultDate[index] = e.target.value;
      setTitle(tempTitle);
    }
    if (index === 1) {
      const tempTitle = { ...title };
      tempTitle.keyResultDate[index] = e.target.value;
      setTitle(tempTitle);
    }
    if (index === 2) {
      const tempTitle = { ...title };
      tempTitle.keyResultDate[index] = e.target.value;
      setTitle(tempTitle);
    }
  };

  // console.log('title :', title.keyResultDate);
  const createKr = () => {
    const value = title;
    const id = objectId;
    console.log('id', id);

    if (
      title.keyResultDate[0] === '' &&
      title.keyResultDate[1] === '' &&
      title.keyResultDate[2] === ''
    ) {
      return toast('KR핵심 결과를 한 개 이상 작성해주세요.');
    } else {
      createKrMutate({ value, id });
    }
  };

  // console.log(startDate.date);

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
                  name='first'
                  value={title.keyResultDate[0]}
                  onChange={event => {
                    onChangeKR(event, 0);
                  }}
                />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input
                  type='text'
                  placeholder='핵심결과를 작성하세요.'
                  // className='input'
                  name='second'
                  value={title.keyResultDate[1]}
                  onChange={event => {
                    onChangeKR(event, 1);
                  }}
                />
              </div>

              <div className='kr itemBox'>
                <img src={kr} alt='' />
                <input
                  type='text'
                  placeholder='핵심결과를 작성하세요.'
                  className='input'
                  name='third'
                  value={title.keyResultDate[2]}
                  onChange={event => {
                    onChangeKR(event, 2);
                  }}
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
            <Toast />
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
                    // readOnly
                    value={startDate.date || ''}
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
                    // readOnly
                    value={endDate.date || ''}
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
                    style={{
                      backgroundColor: `${objInfo.color}`,
                    }}
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
            <Toast />
          </>
        )}
      </ModalBox>
    </>
  );
};

export default OkrModal;
