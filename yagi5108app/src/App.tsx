import { Container, Box } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import bgImage from '../image/背景.png';
import bgm from '../Audio/自然の中でゆったりと.mp3';

const App = () => {
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
        }}
      >
        <img src={bgImage} style={{ width: 'auto', height: 'auto', maxHeight: '100%' }} />
        <ReactAudioPlayer src={bgm} autoPlay loop volume={0.5}  />
      </Container>
    </Box>
  );
};

export default App;
