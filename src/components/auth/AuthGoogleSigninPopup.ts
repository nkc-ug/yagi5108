import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { provider } from '../../lib/AuthGoogleProviderCreate';
import { SetupUserData } from './SetupUserData';
import { UserProps } from '../../types/UserDataType';
import { GetUserData } from './GetUserData';

export const Auth = async () => {
  const auth = await getAuth();
  const result = await signInWithPopup(auth, provider);
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  // The signed-in user info.
  const user = result.user;
  // IdP data available using getAdditionalUserInfo(result)
  // ...
  const email = user.email !== null ? user.email : 'errorEmail';
  const userName = user.displayName !== null ? user.displayName : 'NoName';
  localStorage.setItem('userId', email);
  const addUser: UserProps = {
    userId: email,
    userName: userName,
  };
  if (!(await GetUserData(email))) {
    // ユーザーがFireStoreに登録されていない場合、初期データを設定する。
    SetupUserData(addUser);
  }
  return email;
};
