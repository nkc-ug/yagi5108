import { useState, FC } from 'react';
import { EmotionDataType } from '../../types/EmotionDataType';

type Props = {
  emotionData: EmotionDataType;
  EmotionMax: number;
  setMax: React.Dispatch<React.SetStateAction<number>>;
  Emotion: number[];
  setEmotion: React.Dispatch<React.SetStateAction<number[]>>;
  overlap: boolean;
  setOverlap: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Branch = ({
  emotionData,
  EmotionMax,
  setMax,
  Emotion,
  setEmotion,
  overlap,
  setOverlap,
}: Props) => {
  //Emotionの配列コピーして足して戻す関数
  const increaseEmotion = (index: number) => {
    const newEmotion = [...Emotion];
    newEmotion[index] += 1;
    setEmotion(newEmotion);
  };
  setMax(emotionData.emoId);
  // switch文の中にロジックを移動
  switch (EmotionMax) {
    case 1:
      increaseEmotion(0);
      // 同じ感情が来ているかどうか確認
      if (Emotion[0] > 0) {
        setOverlap(true);
      }
      break;
    case 2:
      increaseEmotion(1);
      if (Emotion[0] > 0) {
        setOverlap(true);
      }
      break;
    case 3:
      increaseEmotion(2);
      if (Emotion[0] > 0) {
        setOverlap(true);
      }
      break;
    case 4:
      increaseEmotion(3);
      if (Emotion[0] > 0) {
        setOverlap(true);
      }
      break;
  }
  {
    overlap === true
      ? setMax(Emotion.indexOf(Math.max(...Emotion)))
      : setMax(Math.floor(Math.random() * 3));
  }
  return EmotionMax + 1;
};
