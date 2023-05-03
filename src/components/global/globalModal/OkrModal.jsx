import { CreateObjective } from '../../../apis/apiPOST';
import calender from '../../../assets/calender.png';
import close from '../../../assets/close.png';
import info from '../../../assets/info.png';
import object from '../../../assets/object.png';
import Toast from '../Toast';
import ColorDropDown from '../globaldropdown/ColorDropDown';
import { OnChange } from '../onChange';
import { ModalBackground, ModalBox, OKRBox } from './modal.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import opacity from 'react-element-popper/animations/opacity';
import transition from 'react-element-popper/animations/transition';
import ReactGA from 'react-ga4';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { toast } from 'react-toastify';

const OkrModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
  useEffect(() => {
    const handleBeforeUnload = e => {
      e.preventDefault();
      e.returnValue =
        '현재 입력중인 항목이 있습니다. 정말 새로고침 하시겠습니까?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
    console.log(startDate);
    console.log(startDate.date);
    setObjInfo({ ...objInfo, startdate: new DateObject(object).format() });
  };

  //endDate 변환 함수
  const convertEnd = (date, format = endDate.format) => {
    let object = { date, format };

    setEndDate(new DateObject(object).format());

    setObjInfo({ ...objInfo, enddate: new DateObject(object).format() });
  };

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
      // console.log('성공');
      createObjectiveMutate(objInfo);
    }
  };
  const [objectId, setObjectId] = useState();

  const { mutate: createObjectiveMutate } = useMutation(CreateObjective, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 생성',
        });
      }
      setObjectId(response.objectiveId);
      onCloseModal();
    },
    onError: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 생성 실패',
        });
      }
    },
  });

  //튤팁
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseOverHandler = () => {
    setShowTooltip(true);
  };
  const onMouseOutHandler = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    if (showTooltip && objInfo.objective.length === 0) {
      setShowTooltip(true);
    } else if (objInfo.objective.length > 0) {
      setShowTooltip(false);
    } else {
      setShowTooltip(false);
    }
  }, [showTooltip, objInfo]);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setObjInfo({ ...objInfo, [name]: value });
    if (value === '') {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <>
          <div className='header'>
            <h2>Objective 추가</h2>
            <img src={close} alt='' onClick={onCloseModal} />
          </div>
          <OKRBox>
            <div className='object itemBox'>
              <img src={object} alt='' />
              <input
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
                type='text'
                placeholder='ex. 제품의 브랜드 이미지 높이기'
                className='input'
                name='objective'
                onChange={onChangeHandler}
              />
            </div>

            {showTooltip && (
              <div className='ObjectTooltip'>
                <img src={info} alt='info' />
                <p>Objective : 우리가 최종적으로 이루고자 하는 정성적 목표</p>
              </div>
            )}

            <div className='date'>
              <img src={calender} alt='' />
              <div className='dateBox'>
                <DatePicker
                  style={{ cursor: 'pointer' }}
                  inputClass='start-input'
                  containerClassName='start-container'
                  months={months}
                  weekDays={weekDays}
                  format={format}
                  placeholder='시작일'
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
                  style={{ cursor: 'pointer' }}
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
              확인
            </button>
          </div>
          {/* <Toast /> */}
        </>
      </ModalBox>
    </>
  );
};

export default OkrModal;
