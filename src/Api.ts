import axios from 'axios';

type emotionDataType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

export const Api = async (text: string, emotionData: emotionDataType) => {
  let ans = {} as emotionDataType;
  let updateEmotionData = {} as emotionDataType;
  let maxEmotion = '';
  let maxScore = -Infinity;
  updateEmotionData = emotionData;
  const fetchAPI = async () => {
    const res = await axios.get(`https://callgpt-f6bkalktuq-uc.a.run.app?text=${text}`);
    const fetchEmotionData = res.data as emotionDataType;
    ans = {
      happy: Number(fetchEmotionData.happy),
      anger: Number(fetchEmotionData.anger),
      sad: Number(fetchEmotionData.sad),
      enjoyable: Number(fetchEmotionData.enjoyable),
      emoId: 0,
    };
  };
  await fetchAPI();

  for (const emotion in ans) {
    if (ans[emotion as keyof emotionDataType] > maxScore) {
      maxEmotion = emotion;
      maxScore = ans[emotion as keyof emotionDataType];
    }
  }
  switch (maxEmotion) {
    case 'happy':
      updateEmotionData.emoId = 1;
      break;
    case 'anger':
      updateEmotionData.emoId = 2;
      break;
    case 'sad':
      updateEmotionData.emoId = 3;
      break;
    case 'enjoyable':
      updateEmotionData.emoId = 4;
      break;
  }

  updateEmotionData.happy += ans.happy;
  updateEmotionData.anger += ans.anger;
  updateEmotionData.sad += ans.sad;
  updateEmotionData.enjoyable += ans.enjoyable;

  return updateEmotionData;
};
