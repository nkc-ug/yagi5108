import { useState, useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { Auth } from './AuthGoogleSigninPopup';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';
import { SetupUserData } from './SetupUserData';
import { AddUserData } from './AddUserData';

export const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(IsLoginContext);
  const [email, setEmail] = useContext(EmailContext);
  const [loginButtonText, setLoginButtonText] = useState(
    !isLogin ? 'ろぐいんする' : 'ろぐあうとする'
  );

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
        AddUserData(fetchEmail);
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
    setLoginButtonText(isLogin ? 'ろぐいんする' : 'ろぐあうとする');
    setIsLogin(!isLogin);
  };

  return (
    <Button
      variant="contained"
      onClick={handleLoginClick}
      sx={{
        backgroundColor: !isLogin ? 'rgba(0,161,255, 1)' : 'rgba(243,113,114, 1)',
        '&:hover': {
          backgroundColor: !isLogin ? 'rgba(0,161,255, 0.75)' : 'rgba(243,113,114, 0.75)',
        },
      }}
    >
      {loginButtonText}
    </Button>
  );
};
