//進化用
type emotionDataType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

const revolution = (emotionData: emotionDataType) => {
  console.log(emotionData);
  let max = -Infinity;
  let maxEmotion = 0;
  let index = 0;
  for (const emotion in emotionData) {
    index++;
    if (emotionData[emotion as keyof emotionDataType] > max && index < 4) {
      max = emotionData[emotion as keyof emotionDataType];
      maxEmotion = index;
    }
    console.log(index);
    console.log(maxEmotion);
  }
  console.log('進化先:' + maxEmotion);
  return maxEmotion;
};

export default revolution;
