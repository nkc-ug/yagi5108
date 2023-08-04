import { useState } from 'react';
import { EmotionDataType } from '../../types/EmotionDataType';
import { eatLimit } from '../../types/EatLimit';

type emotionDataType = EmotionDataType;

export const Branch = (emotionData: emotionDataType) => {
  const [EmotionMax, setMax] = useState<number>(0);
  const [Emotion, setEmotion] = useState([0, 0, 0, 0]);
  const [cnt, setCnt] = useState<number>(0);

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
        setCnt(1);
      }
      break;
    case 2:
      increaseEmotion(1);
      if (Emotion[0] > 0) {
        setCnt(1);
      }
      break;
    case 3:
      increaseEmotion(2);
      if (Emotion[0] > 0) {
        setCnt(1);
      }
      break;
    case 4:
      increaseEmotion(3);
      if (Emotion[0] > 0) {
        setCnt(1);
      }
      break;
  }
  {
    cnt === 1
      ? setMax(Emotion.indexOf(Math.max(...Emotion)))
      : setMax(Math.floor(Math.random() * 3));
  }
  return EmotionMax + 1;
};
