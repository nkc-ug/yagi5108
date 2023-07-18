import axios from 'axios';
import EmoDataType from './types/import-EmoType';

type emotionDataType = EmoDataType.EmoNum.emoDataType;

export const getEmotionApi = async (text: string, emotionData: emotionDataType) => {
  let ans = {} as emotionDataType;
  let updateEmotionData = {} as emotionDataType;
  let maxEmotion = '';
  let maxScore = -Infinity;
  updateEmotionData = emotionData;
  const fetchAPI = async () => {
    const res = await axios.get(`https://callgpt-f6bkalktuq-uc.a.run.app?text=${text}`);
    const fetchEmotionData = res.data as emotionDataType;
    ans = {
      Joy: Number(fetchEmotionData.Joy),
      Anger: Number(fetchEmotionData.Anger),
      Sorrow: Number(fetchEmotionData.Sorrow),
      Enjoyable: Number(fetchEmotionData.Enjoyable),
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
    case 'Joy':
      updateEmotionData.emoId = 1;
      break;
    case 'Anger':
      updateEmotionData.emoId = 2;
      break;
    case 'Sorrow':
      updateEmotionData.emoId = 3;
      break;
    case 'Enjoyable':
      updateEmotionData.emoId = 4;
      break;
  }

  updateEmotionData.Joy += ans.Joy;
  updateEmotionData.Anger += ans.Anger;
  updateEmotionData.Sorrow += ans.Sorrow;
  updateEmotionData.Enjoyable += ans.Enjoyable;

  return updateEmotionData;
};
