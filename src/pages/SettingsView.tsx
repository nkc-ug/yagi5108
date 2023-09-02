import { Box, Button, ButtonGroup, Divider, Slider, Switch, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState, useContext } from 'react';
import bgm from '../Audio/Bgm.mp3';
import backgroundgImage from '../assets/backGround.png';
import { SettingsNavBarCon } from '../components/settings/SettingsNavBarCon';
import { BackgroundContext, MusicContext } from '../provider/ContextProviders';
import { LoginButton } from '../components/auth/LoginButton';
import { UserDataDisplay } from '../components/auth/UserDataDisplay';
import { convertBackGroundImg } from '../util/convertBackGroundImg';
import VolumeDownIcon from '@mui/icons-material/VolumeUp';
import VolumeUpIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export const SettingsView = () => {
  const [value, setValue] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMusicPlaying, setMusicPlaying] = useContext(MusicContext);
  const [backgroundUrl] = useContext(BackgroundContext);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const backGround = convertBackGroundImg({
    skyUrl: backgroundUrl.skyUrl,
    groundUrl: backgroundUrl.groundUrl,
  });

  useEffect(() => {
    // 初回マウント時に音声要素を作成
    if (!audioRef.current) {
      const audioElement = new Audio(bgm);
      audioElement.volume = value / 100;
      audioElement.loop = true;
      audioRef.current = audioElement;
      audioRef.current.currentTime = 0;
      audioRef.current.play(); // 再生開始
    } else {
      audioRef.current.volume = value / 100;
    }
    // コンポーネントがアンマウントされたときに音声要素を破棄
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [value]);

  const toggleBGM = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const setVolume = (volume: number) => {
    setValue(volume);
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }

    if (volume === 0) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const playLoud = () => {
    setVolume(100);
  };

  const playMedium = () => {
    setVolume(50);
  };

  const playSoft = () => {
    setVolume(20);
  };

  return (
    <Container disableGutters maxWidth="sm">
      <Stack
        spacing={3}
        sx={{
          m: 5,
          p: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 1,
            }}
          >
            おんがく
          </Typography>
          <Stack justifyContent="center" alignItems="center" direction="row">
            <Switch
              value={isMusicPlaying}
              onChange={() => {
                toggleBGM();
              }}
            />
            <Typography variant="body2">オン・オフ</Typography>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            {value === 0 ? <VolumeOffIcon /> : <VolumeDownIcon />}
            <Slider
              disabled={!isMusicPlaying}
              aria-label="Volume"
              value={value}
              onChange={(_, newValue) => {
                setVolume(newValue as number);
              }}
            />
            <VolumeUpIcon />
          </Stack>
        </Box>
        <Divider />
        <UserDataDisplay />
        <LoginButton />
      </Stack>
      <Stack
        justifyContent="center"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            backgroundImage: `url(${backGround.skyUrl})`,
            backgroundSize: '100%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            height: '60dvh',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            marginTop: '-5dvh',
            backgroundImage: `url(${backGround.groundUrl})`,
            height: '45dvh',
          }}
        />
      </Stack>
      <SettingsNavBarCon />
    </Container>
  );
};
