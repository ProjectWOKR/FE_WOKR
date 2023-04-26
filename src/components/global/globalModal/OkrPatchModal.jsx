import { DeleteObjective } from '../../../apis/apiDELETE';
import { PatchObjective } from '../../../apis/apiPATCH';
import calender from '../../../assets/calender.png';
import close from '../../../assets/close.png';
import object from '../../../assets/object.png';
import trash from '../../../assets/trash.png';
import { patchOKRInfo } from '../../../store/store';
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
import { useRecoilValue } from 'recoil';

const OkrPatchModal = ({ onCloseModal, modalRef, modalOutSideClick }) => {
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

  const objectiveInfo = useRecoilValue(patchOKRInfo);

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
    objective: objectiveInfo.objective,
    startdate: objectiveInfo.startData,
    enddate: objectiveInfo.endData,
    color: objectiveInfo.color,
  });

  const [startDate, setStartDate] = useState(objectiveInfo.startData);
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

  const createO = () => {
    const startd = new Date(objInfo.startdate);
    const endd = new Date(objInfo.enddate);
    const id = objectiveInfo.id;
    const value = objInfo;

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
      setObjInfo({ ...objInfo, color: '#9B9B9B' });
      toast('색상을 선택하지 않으면 회색이 기본입니다.');
    } else {
      patchObjectivemutate({ value, id });
    }
  };

  const { mutate: patchObjectivemutate } = useMutation(PatchObjective, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 수정',
        });
      }
      queryClient.invalidateQueries(['OKR']);

      onCloseModal();
    },
    onError: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 수정 실패',
        });
      }
      alert('팀장만 OKR 수정가능합니다.');
    },
  });

  const { mutate: deleteObjective } = useMutation(DeleteObjective, {
    onSuccess: response => {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: 'Objective 삭제',
        });
      }

      queryClient.invalidateQueries(['OKR']);

      onCloseModal();
    },
    onError: response => {
      alert('팀장 및 본인이 작성한 OKR만 수정가능합니다.');
    },
  });

  const onDeleteObjective = () => {
    const result =
      window.confirm(`[KR - 핵심 결과] 와 연동된 [To-Do]가 있다면 함께 삭제됩니다.
정말 삭제하시겠습니까?`);
    if (result) {
      deleteObjective(objectiveInfo.id);
    } else {
    }
  };
  return (
    <>
      <ModalBackground ref={modalRef} onClick={modalOutSideClick} />
      <ModalBox>
        <>
          <div className='header'>
            <h2>Objective 수정</h2>
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
                // maxLength='17'
                value={objInfo.objective}
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
                  value={objInfo.startdate}
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
                  format={format}
                  weekDays={weekDays}
                  placeholder='종료일'
                  value={objInfo.enddate}
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
              확인
            </button>
            <div
              className='deletebtn'
              onClick={() => {
                onDeleteObjective();
              }}>
              <img className='deleteImg' src={trash} alt='' />
              <p className='deleteName'>삭제</p>
            </div>
          </div>
          {/* <Toast /> */}
        </>
      </ModalBox>
    </>
  );
};

export default OkrPatchModal;
