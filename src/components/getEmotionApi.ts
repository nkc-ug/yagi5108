import axios from 'axios';
import { EmotionDataType } from '../types/EmotionDataType';
import { addWordEmotions } from '../api/addWordEmotions';
import { getWordEmotions } from '../api/getWordEmotions';

type emotionDataType = EmotionDataType;

export const getEmotionApi = async (text: string, emotionData: emotionDataType) => {
  let updateEmotionData = {} as emotionDataType;
  updateEmotionData = emotionData;
  let maxEmotion = '';
  let maxScore = -Infinity;
  const fetchAPI = async () => {
    const res = await axios.get(`https://callgpt-f6bkalktuq-uc.a.run.app?text=${text}`);
    const fetchEmotionData = res.data as emotionDataType;
    emotionData = {
      Joy: Number(fetchEmotionData.Joy),
      Anger: Number(fetchEmotionData.Anger),
      Sorrow: Number(fetchEmotionData.Sorrow),
      Enjoyable: Number(fetchEmotionData.Enjoyable),
      emoId: 0,
    };
  };
  const noWord = () =>{
    
  }

  emotionData = await getWordEmotions(text);
  if(emotionData.emoId === undefined){
    await fetchAPI();
    for (const emotion in emotionData) {
      if (emotionData[emotion as keyof emotionDataType] > maxScore) {
        maxEmotion = emotion;
        maxScore = emotionData[emotion as keyof emotionDataType];
      }
    }
    switch (maxEmotion) {
      case 'Joy':
        emotionData.emoId = 1;
        break;
      case 'Anger':
        emotionData.emoId = 2;
        break;
      case 'Sorrow':
        emotionData.emoId = 3;
        break;
      case 'Enjoyable':
        emotionData.emoId = 4;
        break;
    }
    addWordEmotions({ text, emotionData });
  }
  console.log(emotionData);

  updateEmotionData.Joy += emotionData.Joy;
  updateEmotionData.Anger += emotionData.Anger;
  updateEmotionData.Sorrow += emotionData.Sorrow;
  updateEmotionData.Enjoyable += emotionData.Enjoyable;
  updateEmotionData.emoId = emotionData.emoId;

  return updateEmotionData;
};
