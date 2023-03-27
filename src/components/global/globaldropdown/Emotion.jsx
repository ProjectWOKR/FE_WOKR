import { useState } from 'react';
import { emotion, useEmotionDropDown } from './dropdown';
import { EmotionSelect } from './dropDown.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchEmotion } from '../../../apis/apiPATCH';

import normal from '../../../assets/normal2.png';
import good from '../../../assets/good.png';
import bad from '../../../assets/bad2.png';

const Emotion = ({
  keyResultId,
  emotionState,
  openDropdownId,
  setOpenDropdownId,
}) => {
  const queryClient = useQueryClient();

  // 자신감 수정
  const { mutate: patchEmotionmutate } = useMutation(PatchEmotion, {
    onSuccess: response => {
      queryClient.invalidateQueries(['OKR']);
    },
    onError: response => {
      alert('팀장 및 자신이 작성한 OKR만 수정 가능합니다.');
    },
  });

  const isOpen = openDropdownId === keyResultId;

  const DropDownItem = ({ setIsOpen, isOpen, el, name, keyResultId }) => {
    const ValueClick = () => {
      let id = keyResultId;
      let value = { emoticon: Number(name) };
      setIsOpen(false);
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
    if (isOpen) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(keyResultId);
    }
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

  return (
    <EmotionSelect>
      <ImgBox />
      {isOpen && (
        <ul>
          {emotion.list.map((el, index) => (
            <DropDownItem
              key={index}
              name={el.name}
              setIsOpen={setOpenDropdownId}
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
