import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { Auth } from './AuthGoogleSigninPopup';
import { LoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';

export const LoginButton = () => {
  const [loginButtonText, setLoginButtonText] = useState('ろぐいん');
  const [login, setLogin] = useContext(LoginContext);
  const [email, setEmail] = useContext(EmailContext);

  const loginButton = async () => {
    if (!login) {
      // ログイン作業の分岐
      const fetchEmail = String(
        localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
      );
      setEmail(fetchEmail);
      if (fetchEmail === '') {
        // ローカルストレージにEmailが格納されていない場合の処理(Authでログインし、Emailを取得後ローカルストレージに格納)
        const fetchEmail = await Auth();
        // const fetchEmail = 'hogehogge@hoge.ho.ge';
        setEmail(fetchEmail);
        localStorage.setItem('email', fetchEmail);
      }
      setLogin(true);
    } else {
      // ログアウト作業の分岐
      localStorage.clear();
      setEmail('');
      setLogin(false);
    }
    setLoginButtonText(loginButtonText === 'ろぐいん' ? 'ろぐあうと' : 'ろぐいん');
    setLogin(!login);
  };

  return (
    <Button variant="contained" onClick={loginButton}>
      {loginButtonText}
    </Button>
  );
};
