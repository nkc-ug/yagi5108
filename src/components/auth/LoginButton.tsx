import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { Auth } from './AuthGoogleSigninPopup';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';

export const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(IsLoginContext);
  const [email, setEmail] = useContext(EmailContext);
  const [loginButtonText, setLoginButtonText] = useState(!isLogin ? 'ろぐいん' : 'ろぐあうと');

  const handleLoginClick = async () => {
    if (!isLogin) {
      // ログイン作業の分岐
      const fetchEmail = String(
        localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
      );
      setEmail(fetchEmail);
      if (fetchEmail === '') {
        // ローカルストレージにEmailが格納されていない場合の処理(Authでログインし、Emailを取得後ローカルストレージに格納)
        const fetchEmail = await Auth();
        setEmail(fetchEmail);
        localStorage.setItem('email', fetchEmail);
      }
    } else {
      // ログアウト作業の分岐
      localStorage.clear();
      setEmail('');
    }
    setLoginButtonText(isLogin ? 'ろぐいん' : 'ろぐあうと');
    setIsLogin(!isLogin);
  };

  return (
    <Button variant="contained" onClick={handleLoginClick}>
      {loginButtonText}
    </Button>
  );
};
