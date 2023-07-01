import { useState } from 'react';
import axios from 'axios';

type emotionDataType = {
  happy: number;
  angry: number;
  sad: number;
  enjoyable: number;
  emoId: number;
};

const Emotion = (text: string, emotionData: emotionDataType): emotionDataType => {
  let ans = {} as emotionDataType;
  let updateEmotionData = {} as emotionDataType;
  let maxEmotion = '';
  let maxScore = -Infinity;
  updateEmotionData = emotionData;
  const fetchAPI = async () => {
    const res = await axios.get('https://test-f6bkalktuq-uc.a.run.app/test/?text=' + text);
    const fetchEmotionData = res.data as emotionDataType;
    console.log(fetchEmotionData);
    ans = {
      happy: fetchEmotionData.happy,
      angry: fetchEmotionData.angry,
      sad: fetchEmotionData.sad,
      enjoyable: fetchEmotionData.enjoyable,
      emoId: 0,
    };
  };
  fetchAPI();
  /*fetch('https://test-f6bkalktuq-uc.a.run.app/test/?text=' + text).then((res) => {
    res.json().then((data) => {
      setAns({
        happy: data.happy,
        angry: data.angry,
        sad: data.sad,
        enjoyable: data.enjoyable
      });
    });
  });*/

  console.log(ans);

  for (const emotion in ans) {
    if (ans[emotion] > maxScore) {
      maxEmotion = emotion;
      maxScore = ans[emotion];
    }
  }
  console.log(maxEmotion);
  switch (maxEmotion) {
    case 'happy':
      updateEmotionData.emoId = 1;
      console.log('debug:最大感情：嬉しい');
      break;
    case 'angry':
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

  console.log(emotionData);
  console.log(ans);
  //console.log(updateEmotionData);

  updateEmotionData.happy += ans.happy;
  updateEmotionData.angry += ans.angry;
  updateEmotionData.sad += ans.sad;
  updateEmotionData.enjoyable += ans.enjoyable;

  console.log(updateEmotionData);
  console.log('--------( ◎ ▽ ◎ )---------');

  return updateEmotionData;
};

export default Emotion;
