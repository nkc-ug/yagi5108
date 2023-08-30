import { addDoc, setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME, UserDBType } from '../../lib/firestore';
import { UserProps } from '../../types/UserDataType';

export const addAuth = async ({ userId, userName }: UserProps) => {
  const collectionRef = doc(db, USERCOLLECTIONNAME, userId);
  const docData: UserDBType = {
    userName: userName,
  };
  if (docData.userName !== 'NoLogin') {
    await setDoc(collectionRef, docData);
  }
};
