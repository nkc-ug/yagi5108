//進化用
export type emotionDataType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

const Branch = (emotionData: emotionDataType) => {
  let max = -Infinity;
  let maxEmotion = 0;
  let index = 0;
  for (const emotion in emotionData) {
    index++;
    if (emotionData[emotion as keyof emotionDataType] > max && index < 5) {
      max = emotionData[emotion as keyof emotionDataType];
      maxEmotion = index;
    }
  }
  return maxEmotion;
};

export default Branch;
