import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME } from '../../lib/firestore';
import { GetUserData } from './GetUserData';

export const AddUserData = async (email: string) => {
  const userData = await GetUserData(email);
  const collectionRef = doc(db, USERCOLLECTIONNAME, email);
  const docData = {
    userName: '',
    totalEatCount: 0,
    battleWinCount: 0,
    goatType: '',
    goatClothes: 'yagi',
  };
  if (docData.userName !== 'NoLogin') {
    await setDoc(collectionRef, docData);
  }
  userData ? await setDoc(collectionRef, userData, { merge: true }) : null;
};
