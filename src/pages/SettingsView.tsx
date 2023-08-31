import { BottomNavigationAction, Slider, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import bgm from '../Audio/Bgm.mp3';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import backgroundgImage from '../assets/tutorial.png';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { LoginButton } from '../components/auth/LoginButton';
import { UserDataButton } from '../components/auth/UserDataButton';

export const SettingsView = () => {
  const [value, setValue] = useState<number>(50);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    if (audioRef.current) {
      audioRef.current.volume = (newValue as number) / 100;
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

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Container
        maxWidth="sm"
        sx={{
          padding: '50px',
          marginTop: '50%',
          textAlign: 'center',
          backgroundImage: `url(${backgroundgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4">おんりょう</Typography>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <BottomNavigationAction
            icon={isPlaying ? <VolumeDown /> : <VolumeOffIcon />}
            onClick={toggleBGM}
          />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>{' '}
        <UserDataButton />
        <LoginButton />
      </Container>
    </Stack>
  );
};
