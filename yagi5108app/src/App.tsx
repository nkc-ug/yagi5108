import React, { useRef, useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import RandomImage from './RandomImage.tsx';
import bgm from '../Audio/自然の中でゆったりと.mp3';
import bgImage from '../image/背景.png';

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // BGMの設定
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleBGM = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box
      style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          maxHeight: '100vh',
          position: 'relative',
        }}
      >
        <img src={bgImage} alt="" style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <RandomImage src={"yagi5108app/image/yagi_syokuzi.png"} />
        <audio ref={audioRef} src={bgm} loop />
        <Button variant="contained" onClick={toggleBGM}>
          {isPlaying ? 'Stop' : 'Play'}
        </Button>
      </Container>
    </Box>
  );
};

export default App;
