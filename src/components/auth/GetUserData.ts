import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { USERCOLLECTIONNAME } from '../../lib/firestore';
import { UserDataType } from '../../types/UserDataType';

export const GetUserData = async (userId: string) => {
  const docRef = doc(db, USERCOLLECTIONNAME, userId);
  const docSnap = await getDoc(docRef);

  return docSnap.data() as UserDataType;
};
