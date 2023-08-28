import { collection, getDocs, query, where } from 'firebase/firestore';
import { EmotionDataType } from '../types/EmotionDataType';
import { db } from '../lib/firebase';
import { COLLECTIONNAME, FIELDNAME } from '../lib/firestore';

/**
 * 文字列・対応する感情をfireStoreから取得する関数
 *
 * @param text 文字列
 *
 * @returns emotionData 対応するEmotionData | 文字列が存在しない場合には空のEmotionData
 *
 * @see
 * https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja
 */
export const getWordEmotions = async (text: string): Promise<EmotionDataType> => {
  const collectionRef = collection(db, COLLECTIONNAME);
  const queryResult = query(collectionRef, where(FIELDNAME, '==', text));

  const docList = await getDocs(queryResult);

  /**
   * 文字列が存在しない場合には空のEmotionDataを返す
   */
  if (docList.size === 0) return {} as EmotionDataType;

  return docList.docs[0].data().emotionData as EmotionDataType;
};
