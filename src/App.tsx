import React, { useEffect, useState } from 'react';
import { Container, Stack, Grid, Box, ThemeProvider } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Flower from './Flower';
import bgImage from './assets/backGround.png';
import RandomWalker from './RandomWalker';
import EmotionApi from './EmotionApi';
import Revolution from './Revolution';
import Popup from './Popup';
import Revopopup from './Revopopup';
import EvolutionWalk from './EvolutionWalk';
import { theme } from './theme/theme';
import { NavBar } from './NavBar';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [pop, handlepop] = useState(true);
  const [eat, handleeat] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showImage, setShowImage] = useState(false);
  //食べた回数と進化先の変数の追加(eatCount,typeId)
  const [inputText, setInputText] = useState('');
  const [eatCount, setEatCount] = useState(1);
  const [typeId, setTypeId] = useState(-1);
  const [revopopup, setrevopopup] = useState(false); //追加
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  type RandomType = 0 | 1 | null;

  const [dispWalker, setDispWalker] = useState(true);
  const [random, setRandom] = useState<RandomType>(null);

  const changeRnadom = () => {
    random === 0 ? setRandom(1) : setRandom(0);
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
    changeRnadom();
  };
  const popSubmit = () => {
    handlepop(true);
    handleeat(true);
    setDispWalker(false);
    setTimeout(() => {
      setDispWalker(true);
    }, 2000);
  };
  const walking = () => {
    handleeat(false);
  };
  //草生成用のハンドルを追加(食事回数と条件達成で進化先の分析)
  const handleGrass = () => {
    console.log('草生成用');
    setEatCount(eatCount + 1);
    if (eatCount >= 5) {
      setTypeId(Revolution(emotionData));
    }
  };

  useEffect(() => {
    if (eat) {
      const timer = setTimeout(() => {
        setShowImage(false);
        walking();
      }, 2000);

      // クリーンアップ関数を返すことで、タイマーがキャンセルされる
      return () => clearTimeout(timer);
    } else {
      // eatがfalseの場合はタイマーをキャンセルする
      setShowImage(true);
    }
  }, [eat]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack direction="row" justifyContent="center">
          <Container
            disableGutters
            maxWidth="sm"
            style={{ position: 'absolute', top: 0, bottom: -1 }}
          >
            <img
              src={bgImage}
              style={{
                height: '90vh',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ bgcolor: '#A6BA3A', height: '10px', mt: -1 }} />
          </Container>
          <Container disableGutters maxWidth="sm" style={{ zIndex: 1, marginTop: 20 }}>
            <Box sx={{ height: '80vh' }}>
              <Grid container>
                <Grid item xs={2}>
                  <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
                  {/* <BGMPlayer src={bgm} /> */}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <Form
                    inputText={inputText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Box sx={{ height: '100px' }}></Box>
                </Grid>
                <Grid item xs={6}>
                  <Flower
                    emotionData={emotionData}
                    eat={eat}
                    showImage={showImage}
                    randomNum={random ?? 0}
                  />
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2} bgcolor="yellow">
                  <Popup
                    emotionData={emotionData}
                    pop={pop}
                    popSubmit={popSubmit}
                    randomNum={random ?? 0}
                  />
                </Grid>
                <Grid item xs={6} bgcolor="red">
                  {dispWalker ? <RandomWalker /> : null}
                  <EvolutionWalk typeId={typeId} />
                </Grid>
                <Grid item xs={4} bgcolor="blue"></Grid>
              </Grid>
              <Grid item xs={6}>
                <Flower
                  emotionData={emotionData}
                  eat={eat}
                  showImage={showImage}
                  randomNum={random ?? 0}
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid container>
                <Grid item xs={2} bgcolor="yellow">
                  <Popup
                    emotionData={emotionData}
                    pop={pop}
                    popSubmit={popSubmit}
                    randomNum={random ?? 0}
                  />
                  {<Revopopup eatCount={eatCount} pop={pop} />} {/*鈴木追加*/}
                </Grid>
                <Grid item xs={6} bgcolor="red">
                  {dispWalker ? <RandomWalker /> : null}
                  <EvolutionWalk typeId={typeId} />
                </Grid>
                <Grid item xs={4} bgcolor="blue"></Grid>
              </Grid>
            </Box>
          </Container>
        </Stack>
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        >
          <NavBar handleTutorialChange={handleOpen} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
