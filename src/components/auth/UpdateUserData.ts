import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME, UserDBType } from '../../lib/firestore';

/*
～UpdateUserDataについて～
firestoreのユーザーデータを更新するためのコンポーネントです。
各変数に代入すべきデータは下記を参照ください。
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
userId: email（コンテキストで存在しています）
updateDataName: 更新したいデータラベルを入力（直入れで構いません）
updateData: 更新したいデータを入力
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
※firestore上に加算する場合は事前に更新データに処理を行ってください。
※更新したいデータラベルがswitch文に存在しない場合は適時追加してください。
～追加の手順～
1,swith文のcaseに追加
2,UserDataType.tsにフィールド名:型を追加
3,SetupUserData.tsにフィールド名:初期値を追加
*/

export const UpdateUserData = async (userId: string, updateDataName: string, updateData: any) => {
  const collectionRef = doc(db, USERCOLLECTIONNAME, userId);
  const docData = dataPackage(updateDataName, updateData);
  await setDoc(collectionRef, docData, { merge: true });
};

const dataPackage = (updateDataName: string, updateData: any) => {
  switch (updateDataName) {
    case 'userName':
      return { userName: updateData };
    case 'goatType':
      return { goatType: updateData };
    case 'goatClothes':
      return { goatClothes: updateData };
    case 'totalEatCount':
      return { totalEatCount: updateData };
    case 'battleWinCount':
      return { battleWinCount: updateData };
  }
};
