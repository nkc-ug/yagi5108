import { useState, useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { Auth } from './AuthGoogleSigninPopup';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';

export const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(IsLoginContext);
  const [email, setEmail] = useContext(EmailContext);
  const [loginButtonText, setLoginButtonText] = useState(!isLogin ? 'ろぐいん' : 'ろぐあうと');
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      // ログイン作業の分岐
      const fetchEmail = String(
        localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
      );
      if (fetchEmail !== '') {
        setEmail(fetchEmail);
        setLoginButtonText('ログアウト');
        setIsLogin(true);
      }
    }
  }, []);

  const handleLoginClick = async () => {
    if (!isLogin) {
      const fetchEmail = await Auth();
      setEmail(fetchEmail);
      localStorage.setItem('email', fetchEmail);
    } else {
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
