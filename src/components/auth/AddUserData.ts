import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME } from '../../lib/firestore';
import { GetUserData } from './GetUserData';

export const AddUserData = async (email: string) => {
  const trophy = {
    eatCount5: false,
    eatCount10: false,
    battleWinCount3: false,
    battleWinCount5: false,
  };
  const userData = await GetUserData(email);
  const collectionRef = doc(db, USERCOLLECTIONNAME, email);
  const docData = {
    userName: '',
    totalEatCount: 0,
    battleWinCount: 0,
    goatType: '',
    goatClothes: 'yagi',
    trophy: trophy,
  };
  if (docData.userName !== 'NoLogin') {
    await setDoc(collectionRef, docData);
  }
  userData ? await setDoc(collectionRef, userData, { merge: true }) : null;
};
