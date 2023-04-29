import { PatchEmotion } from '../../../apis/apiPATCH';
import good from '../../../assets/emoji1.png';
import bad from '../../../assets/emoji2.png';
import normal from '../../../assets/emoji3.png';
import info from '../../../assets/question.png';
import { EmotionSelect } from './dropDown.styled';
import { emotion } from './dropdown';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';

const Emotion = ({
  setShowEmotion,
  showEmotion,
  keyResultId,
  emotionState,
  openDropdownId,
  setOpenDropdownId,
}) => {
  // console.log('showEmotion :', showEmotion);
  // console.log('keyResultId :', keyResultId);
  // console.log('emotionState :', emotionState);
  // console.log('openDropdownId :', openDropdownId);
  // console.log('---------');
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  // console.log(open);

  // const test = () => {
  //   setOpen(!open);
  // };

  // 자신감 수정
  const { mutate: patchEmotionmutate } = useMutation(PatchEmotion, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: '버튼',
          action: '자신감 수정',
        });
      }
    },
    onError: response => {
      alert('팀장 및 자신이 작성한 OKR만 수정 가능합니다.');
    },
  });

  // const isOpen = openDropdownId === keyResultId;

  const DropDownItem = ({ setIsOpen, isOpen, el, name, keyResultId }) => {
    const ValueClick = () => {
      let id = keyResultId;
      let value = { emoticon: Number(name) };
      setIsOpen(false);
      patchEmotionmutate({ id, value });
    };

    return (
      <li onClick={ValueClick}>
        <div
          style={{
            background: `url(${el.emotion}) no-repeat center / 100%`,
            width: '31px',
            height: '31px',
            margin: '0 auto',
          }}
        />
      </li>
    );
  };

  const onClick = e => {
    // console.log(e);
    // // if (isOpen) {
    // //   setOpenDropdownId(null);
    // // } else {
    // //   setOpenDropdownId(keyResultId);
    // // }
    // setShowEmotion(!showEmotion);
    console.log('눌림');
    setOpen(!open);
  };

  const ImgBox = () => {
    if (emotionState === 0) {
      return (
        <div
          className='emotion'
          onClick={onClick}
          style={{
            background: `url(${normal}) no-repeat center / 100%`,
          }}></div>
      );
    } else if (emotionState === 1) {
      return (
        <div
          className='emotion'
          onClick={onClick}
          style={{
            background: `url(${good}) no-repeat center / 100%`,
          }}></div>
      );
    } else {
      return (
        <div
          className='emotion'
          onClick={onClick}
          style={{
            background: `url(${bad}) no-repeat center / 100%`,
          }}></div>
      );
    }
  };

  const selectRef = useRef();

  const [show, setShow] = useState(false);
  // console.log(show);
  const showTooltip = () => {
    setShow(!show);
  };

  useEffect(() => {
    // console.log('effect');
    const clickOutside = e => {
      // console.log(e);
      // console.log(selectRef.current);
      // console.log(e.target);
      if (selectRef.current !== e.target) {
        // setIsOpen(!isOpen);
        // isOpen = false;
      }
      // console.log(selectRef.current && !selectRef.current.contains(e.target));
      // if (selectRef.current && !selectRef.current.contains(e.target)) {
      //   setShow(!isOpen);
      // }
    };

    if (open) {
      window.addEventListener('click', clickOutside);
    }
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [open]);

  return (
    <EmotionSelect>
      <ImgBox />
      {open && (
        <ul ref={selectRef}>
          <div className='tooltip'>
            <span>자신감 지표</span>
            <img src={info} alt='info' onClick={showTooltip} />
          </div>
          {emotion.list.map((el, index) => (
            <DropDownItem
              key={index}
              name={el.name}
              setIsOpen={setOpenDropdownId}
              open={open}
              el={el}
              keyResultId={keyResultId}
            />
          ))}
        </ul>
      )}
    </EmotionSelect>
  );
};

export default Emotion;
