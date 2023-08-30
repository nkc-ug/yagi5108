import { Slider, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import React, { useState, useContext } from 'react';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button } from '@mui/material';
import { Auth } from '../components/auth/AuthGoogleSigninPopup';
import { getAuth } from '../components/auth/getAuth';
import { UserDataType } from '../types/UserDataType';
import { LoginContext } from '../provider/ContextProviders';
import { EmailContext } from '../provider/ContextProviders';

export const SettingsView = () => {
  const [value, setValue] = React.useState<number>(30);

  const [loginButtonText, setLoginButtonText] = useState('ろぐいん');
  const [login, setLogin] = useContext(LoginContext);
  const [email, setEmail] = useContext(EmailContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const loginButton = async () => {
    if (!login) {
      const fetchEmail = String(
        localStorage.getItem('email') !== null ? localStorage.getItem('email') : ''
      );
      setEmail(fetchEmail);
      if (fetchEmail === '') {
        const fetchEmail = await Auth();
        setEmail(fetchEmail);
        localStorage.setItem('email', fetchEmail);
      }
      setLoginButtonText('ろぐあうと');
      setLogin(true);
    } else {
      localStorage.clear();
      setEmail('');
      setLoginButtonText('ろぐいん');
      setLogin(false);
    }
  };

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Container
        maxWidth="sm"
        sx={{
          padding: '50px',
          marginTop: '50%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">おんりょう</Typography>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDownIcon />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUpIcon />
        </Stack>{' '}
        <Button variant="contained" onClick={loginButton}>
          {loginButtonText}
        </Button>
      </Container>
    </Stack>
  );
};
