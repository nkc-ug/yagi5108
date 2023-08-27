import { addDoc, collection } from 'firebase/firestore';
import { EmotionDataType } from '../types/EmotionDataType';
import { db } from '../lib/firebase';
import { COLLECTIONNAME, EmotionDataDBType } from '../lib/firestore';

type Props = {
  text: string;
  emotionData: EmotionDataType;
};

/**
 * 文字列に対応する感情をfireStoreに追加する関数
 *
 * @param text 文字列
 * @param emotionData 対応するEmotionData
 *
 * @see
 * https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja
 */
export const addWordEmotions = async ({ text, emotionData }: Props) => {
  const collectionRef = collection(db, COLLECTIONNAME);
  const docData: EmotionDataDBType = {
    documentWord: text,
    emotionData: emotionData,
  };

  await addDoc(collectionRef, docData);
};
