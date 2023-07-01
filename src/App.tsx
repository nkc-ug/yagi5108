import React, { useState } from 'react';
import { Container, Stack, Grid, Box } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Flower from './Flower';
import bgImage from './assets/backGround.png';
import RandomWalker from './RandomWalker';
import BGMPlayer from './Bgm';
import bgm from './Audio/Bgm.mp3';
import EmotionApi from './EmotionApi';
import Revolution from './Revolution';
import Popup from './popup';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [pop, handlepop] = useState(true);
  const [eat, handleeat] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //食べた回数と進化先の変数の追加(eatCount,typeId)
  const [inputText, setInputText] = useState('');
  const [eatCount, setEatCount] = useState(0);
  const [typeId, setTypeId] = useState(-1);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  //追加
  //emotionData管理用のtypeの追加
  type emotionDataType = {
    happy: number;
    anger: number;
    sad: number;
    enjoyable: number;
    emoId: number;
  };
  const [emotionData, setEmotionData] = useState<emotionDataType>({
    happy: 0,
    anger: 0,
    sad: 0,
    enjoyable: 0,
    emoId: 0,
  });
  const handleSubmit = async () => {
    setEmotionData(await EmotionApi(inputText, emotionData));
    handleGrass();
    setInputText('');
    handlepop(false);
  };
  const popSubmit = () => {
    handlepop(true);
    handleeat(true);
  };
  //草生成用のハンドルを追加(食事回数と条件達成で進化先の分析)
  const handleGrass = () => {
    console.log('草生成用');
    setEatCount(eatCount + 1);
    if (eatCount >= 5) {
      setTypeId(Revolution(emotionData));
    }
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
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Form inputText={inputText} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Flower emotionData={emotionData} eat={eat} />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2} bgcolor="yellow">
              <Popup emotionData={emotionData} pop={pop} popSubmit={popSubmit} />
            </Grid>
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
