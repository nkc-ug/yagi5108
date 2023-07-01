import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Flower from './Flower';
import bgImage from './assets/backGround.png';
import RandomWalker from './RandomWalker';
import BGMPlayer from './Bgm';
import bgm from '../Audio/自然の中でゆったりと.mp3';
import EmotionApi from './EmotionApi';
import { SyokuziCon } from './SyokuziCon';
import { SettingCon } from './SettingsCon';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputText, setInputText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  //山本、追加
  const [emotionData] = useState<number[]>([0, 0, 0, 0, 0]);
  const handleSubmit = () => {
    const updateEmotionData = EmotionApi({ text: inputText, emotionData: emotionData });
    setInputText('');
  };

  return (
    <div>
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
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ height: '100vh' }}>
          <Form inputText={inputText} handleChange={handleChange} handleSubmit={handleSubmit} />
          <Flower />
          <RandomWalker />
          <SyokuziCon />
          <BGMPlayer src={bgm} />
          <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
        </Box>
      </Container>
    </div>
  );
};

export default App;
