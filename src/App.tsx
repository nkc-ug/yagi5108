import React, { useState } from 'react';
import { Container, Box, Stack, Grid } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Flower from './Flower';
import bgImage from './assets/backGround.png';
import RandomWalker from './RandomWalker';
import BGMPlayer from './Bgm';
import bgm from '../Audio/自然の中でゆったりと.mp3';
import EmotionApi from './EmotionApi';
import { SyokuziCon } from './SyokuziCon';

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
      <Stack direction="row" justifyContent="center">
        <Container disableGutters maxWidth="sm" style={{ position: 'absolute' }}>
          <img
            src={bgImage}
            style={{
              height: '90vh',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Container>
        <Container disableGutters maxWidth="sm" style={{ zIndex: 1 }}>
          <Grid container>
            <Grid item xs={2}>
              <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <BGMPlayer src={bgm} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Form inputText={inputText} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Flower />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2} bgcolor="yellow"></Grid>
            <Grid item xs={6} bgcolor="red">
              <RandomWalker />
            </Grid>
            <Grid item xs={4} bgcolor="blue"></Grid>
          </Grid>
        </Container>
      </Stack>
    </div>
  );
};

export default App;
