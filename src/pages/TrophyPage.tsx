import { useContext } from 'react';
import { Typography, Container } from '@mui/material';
import backgroundgImage from '../assets/night.png';
import { GetUserData } from '../components/auth/GetUserData';
import { IsLoginContext } from '../provider/ContextProviders';

import { RequestLogin } from '../components/trophy/RequestLogin';
import { TrophyList } from '../components/trophy/TrophyList';

import { CostumeNavBarCon } from '../components/costume/CostumeNavBarcon';

export const TrophyPage = () => {
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          padding: '0px',
          minHeight: '100vh',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          backgroundImage: `url(${backgroundgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            margin: '0px',
            padding: '20px',
            backgroundColor: 'rgba(220, 220, 220, 0.6)',
            fontSize: '48px',
          }}
        >
          トロフィールーム
        </Typography>
        <RequestLogin />
        <TrophyList />
      </Container>
      <CostumeNavBarCon />
    </div>
  );
};
