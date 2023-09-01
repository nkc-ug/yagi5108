import { BottomNavigationAction, Button, ButtonGroup, Slider, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import React, { useEffect, useState, useContext, useRef } from 'react';
import bgm from '../Audio/Bgm.mp3';
// import { VolumeDown, VolumeUp } from '@mui/icons-material';
import backgroundgImage from '../assets/backGround.png';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { SettingsNavBarCon } from '../components/settings/SettingsNavBarCon';
import { MusicContext } from '../provider/ContextProviders';
import { LoginButton } from '../components/auth/LoginButton';
// import { UserDataButton } from '../components/auth/UserDataButton';

export const SettingsView = () => {
  const [value, setValue] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [isMusicPlaying, setMusicPlaying] = useContext(MusicContext);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    if (audioRef.current) {
      audioRef.current.volume = (newValue as number) / 100;
    }

    if (newValue === 0) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

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
    <div>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Container
          maxWidth="sm"
          sx={{
            padding: '50px',
            marginTop: '50%',
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
          <Typography variant="h4">おんりょう</Typography>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1 }}
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: '10%' }}
          >
            <ButtonGroup variant="contained" aria-label="音量調節">
              <Button onClick={playLoud}>おおきい</Button>
              <Button onClick={playMedium}>ふつう</Button>
              <Button onClick={playSoft}>ちいさい</Button>
              <Button onClick={toggleBGM}>けす</Button>
            </ButtonGroup>
          </Stack>
          {/* <UserDataButton /> */}
          <LoginButton />
        </Container>
      </Stack>
      <SettingsNavBarCon />
    </div>
  );
};
