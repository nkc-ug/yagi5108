import { useState, useEffect } from 'react';

function Emotion({ text, emotionData }: { text: string; emotionData: number[] }) {
  const apiUri = 'https://test-f6bkalktuq-uc.a.run.app/test/?text=' + text;

  const [answer, setAanswer] = useState<any>('');
  const [updateEmotionData, setUpdateEmotionData] = useState<number[]>([...emotionData]);

  useEffect(() => {
    fetch(apiUri)
      .then((response) => response.json())
      .then((data) => setAanswer(data))
      .catch((error) => console.log(error));
  }, []);

  const [maxEmotion, setMaxEmotion] = useState<string>('');
  const [maxScore, setMaxScore] = useState<number>(-Infinity);

  let index = 1;
  for (const emotion in answer) {
    if (Object.prototype.hasOwnProperty.call(answer, emotion)) {
      setUpdateEmotionData((prevEmotionData) => {
        const updatedData = [...prevEmotionData];
        updatedData[index] += answer[emotion];
        return updatedData;
      });
      if (answer[emotion] > maxScore) {
        setMaxEmotion(emotion);
        setMaxScore(answer[emotion]);
      }
      index += 1;
    }
  }

  switch (maxEmotion) {
    case 'happy':
      setUpdateEmotionData((prevEmotionData) => {
        const updatedData = [...prevEmotionData];
        updatedData[4] = 1;
        return updatedData;
      });
      break;
    case 'anger':
      setUpdateEmotionData((prevEmotionData) => {
        const updatedData = [...prevEmotionData];
        updatedData[4] = 2;
        return updatedData;
      });
      break;
    case 'sad':
      setUpdateEmotionData((prevEmotionData) => {
        const updatedData = [...prevEmotionData];
        updatedData[4] = 3;
        return updatedData;
      });
      break;
    case 'enjoyable':
      setUpdateEmotionData((prevEmotionData) => {
        const updatedData = [...prevEmotionData];
        updatedData[4] = 4;
        return updatedData;
      });
      break;
  }
  console.log(updateEmotionData);
  return updateEmotionData;
}

export default Emotion;
