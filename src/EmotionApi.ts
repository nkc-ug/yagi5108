import axios from 'axios';

type emotionDataType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

const Emotion = async (text: string, emotionData: emotionDataType) => {
  let ans = {} as emotionDataType;
  let updateEmotionData = {} as emotionDataType;
  let maxEmotion = '';
  let maxScore = -Infinity;
  updateEmotionData = emotionData;
  const fetchAPI = async () => {
    const res = await axios.get('https://test-f6bkalktuq-uc.a.run.app/test/?text=' + text);
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
      console.log('debug:最大感情：嬉しい');
      break;
    case 'anger':
      updateEmotionData.emoId = 2;
      console.log('debug:最大感情：怒り');
      break;
    case 'sad':
      updateEmotionData.emoId = 3;
      console.log('debug:最大感情：悲しい');
      break;
    case 'enjoyable':
      updateEmotionData.emoId = 4;
      console.log('debug:最大感情：楽しい');
      break;
  }

  updateEmotionData.happy += ans.happy;
  updateEmotionData.anger += ans.anger;
  updateEmotionData.sad += ans.sad;
  updateEmotionData.enjoyable += ans.enjoyable;

  return updateEmotionData;
};

export default Emotion;
