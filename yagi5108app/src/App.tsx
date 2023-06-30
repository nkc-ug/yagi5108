import { Container, Box, Button } from '@mui/material';
import { useRef, useState } from 'react';
import bgImage from '../image/背景.png';
import bgm from '../Audio/自然の中でゆったりと.mp3';
import RandomWalker from './RandomWalker';

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); //bgmの設定
  const [isPlaying, setIsPlaying] = useState(false);

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
    <Box                           //背景の設定
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
        }}  
      >                                                                                          
        <img src={bgImage} alt="" style={{ width: 'auto', height: 'auto', maxHeight: '100%' }} />
        <RandomWalker />
        <audio ref={audioRef} src={bgm} loop />
        <Button variant="contained" onClick={toggleBGM}>
          {isPlaying ? 'Stop' : 'Play'}
        </Button>
      </Container>
    </Box>
  );
};

export default App;