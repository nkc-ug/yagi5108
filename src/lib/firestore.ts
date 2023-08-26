import { EmotionDataType } from '../types/EmotionDataType';

/**
 * FireStore DB設計
 *
 * コレクション名: words
 * ドキュメント: 自動設定の文字列
 *
 * フィールド名: documentWord: string 対象の文字列
 * フィールド名: emotionData: EmotionDataType 対応する感情
 */

// DBの型定義
export type EmotionDataDBType = {
  documentWord: string;
  emotionData: EmotionDataType;
};

// コレクションの名前
export const COLLECTIONNAME = 'words';

// 文字列を格納するフィールド名
export const FIELDNAME = 'documentWord';
