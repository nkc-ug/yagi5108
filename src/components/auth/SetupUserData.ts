import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME } from '../../lib/firestore';
import { UserProps } from '../../types/UserDataType';

export const SetupUserData = async ({ userId, userName }: UserProps) => {
  const collectionRef = doc(db, USERCOLLECTIONNAME, userId);
  const docData = {
    userName: userName,
    totalEatCount: 0,
    battleWinCount: 0,
    goatType: '',
    goatClothes: 'yagi',
  };
  if (docData.userName !== 'NoLogin') {
    await setDoc(collectionRef, docData);
  }
};
