import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { BottomNavigationAction, Slider, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import React, { useRef, useState } from 'react';
import bgm from '../../Audio/Bgm.mp3';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export const SettingsView = () => {
  const [value, setValue] = React.useState<number>(30);
  //   const [isPlaying, setIsPlaying] = useState(false);

  //   const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  //   const toggleBGM = () => {
  //     if (audioRef.current) {
  //       if (isPlaying) {
  //         audioRef.current.pause();
  //       } else {
  //         audioRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //     }
  //   };

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      {/* <audio ref={audioRef} src={bgm} loop /> */}
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
          {/* <BottomNavigationAction
            icon={isPlaying ? <VolumeOffIcon /> : <VolumeDown />}
            onClick={toggleBGM}
          > */}
          <VolumeDownIcon />
          {/* </BottomNavigationAction> */}
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUpIcon />
        </Stack>{' '}
      </Container>
    </Stack>
  );
};
