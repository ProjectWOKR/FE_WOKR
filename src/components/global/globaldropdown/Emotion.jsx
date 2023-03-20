import { useEffect, useRef, useState } from 'react';
import { useDropDown, emotion, useEmotionDropDown } from './dropdown';
import { EmotionSelect } from './dropDown.styled';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { IsOpen, patchEmotion } from './../../../store/store';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PatchEmotion } from '../../../apis/apiPATCH';
import { GetKR } from '../../../apis/apiGET';

import normal from '../../../assets/normal.png';
import good from '../../../assets/good.png';
import bad from '../../../assets/bad.png';

const Emotion = ({ slicedArray, keyResultId, emotionState }) => {
  // const setPatchEmotionInfo = useSetRecoilState(patchEmotion);

  // const [patchEmotionInfo, setPatchEmotionInfo] = useRecoilState(patchEmotion);

  const queryClient = useQueryClient();

  const [patchEmotionInfo, setPatchEmotionInfo] = useState({
    emoticon: emotionState,
  });

  // console.log(patchEmotionInfo);
  // 자신감 수정
  const { mutate: patchEmotionmutate } = useMutation(PatchEmotion, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
      console.log('성공');
    },
    onError: response => {
      console.log('실패');
    },
  });

  // 드롭다운 상태

  const [isOpen, setIsOpen] = useState(false);

  const DropDownItem = ({ setIsOpen, isOpen, el, name, keyResultId }) => {
    // console.log('keyResultId :', keyResultId);
    // console.log(name);
    const ValueClick = () => {
      let id = keyResultId;
      let value = { emoticon: Number(name) };
      setIsOpen(!isOpen);
      patchEmotionmutate({ id, value });
    };

    return (
      <li
        onClick={ValueClick}
        style={{ background: `url(${el.emotion}) no-repeat center / 100%` }}
      />
    );
  };

  const onClick = () => {
    setIsOpen(!isOpen);
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
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: `url(${good}) no-repeat center / 100%`,
          }}></div>
      );
    } else {
      return (
        <div
          className='emotion'
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: `url(${bad}) no-repeat center / 100%`,
          }}></div>
      );
    }
  };

  return (
    <EmotionSelect>
      <ImgBox />
      {isOpen && (
        <ul>
          {emotion.list.map((el, index) => (
            <DropDownItem
              key={index}
              name={el.name}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
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
