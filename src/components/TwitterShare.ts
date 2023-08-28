import { EmotionDataType } from '../types/EmotionDataType';

export const TwitterShare = (emotionData: EmotionDataType) => {
  const appUrl = 'https://yagi5108.web.app/';

  const setUrl = () => {
    const template = 'https://twitter.com/intent/tweet?text=言の葉を食べるヤギを遊んでいるよ！%0A';
    switch (emotionData.emoId) {
      case 1:
        return `${template}私のヤギは喜びのヤギに成長したよ！%0A${appUrl}`;
      case 2:
        return `${template}私のヤギは怒りのヤギに成長したよ！%0A${appUrl}`;
      case 3:
        return `${template}私のヤギは哀しみのヤギに成長したよ！%0A${appUrl}`;
      case 4:
        return `${template}私のヤギは楽しみのヤギに成長したよ！%0A${appUrl}`;
      default:
        return `${template}私のヤギは成長途中だよ！%0A${appUrl}`;
    }
  };

  const url = setUrl();
  window.open(url, '_blank');
};
