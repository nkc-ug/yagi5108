import { EmotionDataType } from '../types/EmotionDataType';

type Props = {
  emotionData: EmotionDataType;
  EmotionMax: number;
  setEmotionMax: React.Dispatch<React.SetStateAction<number>>;
  EmotionList: number[];
  setEmotionList: React.Dispatch<React.SetStateAction<number[]>>;
  overlap: boolean;
  setOverlap: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Branch = ({
  emotionData,
  EmotionMax,
  setEmotionMax,
  EmotionList,
  setEmotionList,
  overlap,
  setOverlap,
}: Props) => {
  //Emotionの配列コピーして足して戻す関数
  const increaseEmotion = (index: number) => {
    const newEmotion2 = EmotionList.map((item, activeIndex) => {
      if (index === activeIndex) {
        return item + 1;
      }
      return item;
    });
    setEmotionList(newEmotion2);

    // const newEmotion = [...Emotion];
    // newEmotion[index] += 1;
    // setEmotion(newEmotion);
  };
  setEmotionMax(emotionData.emoId);
  // switch文の中にロジックを移動

  switch (emotionData.emoId) {
    case 1:
      increaseEmotion(0);
      // 同じ感情が来ているかどうか確認
      if (EmotionList[0] > 1) {
        setOverlap(true);
      }
      break;
    case 2:
      increaseEmotion(1);
      if (EmotionList[1] > 1) {
        setOverlap(true);
      }
      break;
    case 3:
      increaseEmotion(2);
      if (EmotionList[2] > 1) {
        setOverlap(true);
      }
      break;
    case 4:
      increaseEmotion(3);
      if (EmotionList[3] > 1) {
        setOverlap(true);
      }
      break;
    default:
      console.log('error');
  }
  // overlap === true
  //   ? setEmotionMax(EmotionList.indexOf(Math.max(...EmotionList)))
  //   : setEmotionMax(Math.floor(Math.random() * 3));
  setEmotionMax(EmotionList.indexOf(Math.max(...EmotionList)));
  return EmotionMax + 1;
};
