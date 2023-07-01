//進化用
export type emotionDataType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

const revolution = (emotionData: emotionDataType) => {
  let max = -Infinity;
  let maxEmotion = 0;
  let index = 0;
  for (const emotion in emotionData) {
    index++;
    if (Number(emotion) > max) {
      max = Number(emotion);
      maxEmotion = index;
    }
  }
  return index;
};

export default revolution;
