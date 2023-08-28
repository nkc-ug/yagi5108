import axios from 'axios';
import { EmotionDataType } from '../types/EmotionDataType';
import { addWordEmotions } from './addWordEmotions';
import { getWordEmotions } from './getWordEmotions';

type emotionDataType = EmotionDataType;
type addWordObjectType = {
  text: string;
  emotionData: EmotionDataType;
};

export const getEmotionApi = async (text: string, emotionData: emotionDataType) => {
  let newEmotionData = Object.assign({}, emotionData);
  let maxEmotion = '';
  let maxScore = 0;

  const fetchAPI = async () => {
    const res = await axios.get(`https://callgpt-f6bkalktuq-uc.a.run.app?text=${text}`);
    const fetchEmotionData = res.data as emotionDataType;

    newEmotionData = {
      Joy: Number(fetchEmotionData.Joy),
      Anger: Number(fetchEmotionData.Anger),
      Sorrow: Number(fetchEmotionData.Sorrow),
      Enjoyable: Number(fetchEmotionData.Enjoyable),
      emoId: 0,
    };
  };

  newEmotionData = await getWordEmotions(text);
  if (newEmotionData.emoId === undefined) {
    await fetchAPI();
    for (const emotion in newEmotionData) {
      if (newEmotionData[emotion as keyof emotionDataType] > maxScore) {
        maxEmotion = emotion;
        maxScore = newEmotionData[emotion as keyof emotionDataType];
      }
    }
    switch (maxEmotion) {
      case 'Joy':
        newEmotionData.emoId = 1;
        break;
      case 'Anger':
        newEmotionData.emoId = 2;
        break;
      case 'Sorrow':
        newEmotionData.emoId = 3;
        break;
      case 'Enjoyable':
        newEmotionData.emoId = 4;
        break;
    }
    const addWord: addWordObjectType = {
      text: text,
      emotionData: newEmotionData,
    };
    addWordEmotions(addWord);
  }

  const updateEmotionData = {
    Joy: (emotionData.Joy += newEmotionData.Joy),
    Anger: (emotionData.Anger += newEmotionData.Anger),
    Sorrow: (emotionData.Sorrow += newEmotionData.Sorrow),
    Enjoyable: (emotionData.Enjoyable += newEmotionData.Enjoyable),
    emoId: newEmotionData.emoId,
  };

  return updateEmotionData;
};
