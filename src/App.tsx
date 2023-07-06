import React, { useEffect, useState } from 'react';
import { Container, Stack, Grid, Box, ThemeProvider, CircularProgress } from '@mui/material';
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
import Evoanimee from './Evoanimee';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [pop, handlepop] = useState(true);
  const [eat, handleeat] = useState(false);
  const [showImage, setShowImage] = useState(false);
  //食べた回数と進化先の変数の追加(eatCount,typeId)
  const [inputText, setInputText] = useState('');
  const [eatCount, setEatCount] = useState(1);
  const [typeId, setTypeId] = useState(-1);
  const [revopopup, setrevopopup] = useState(false); //追加

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  type RandomType = 0 | 1 | null;

  const [dispWalker, setDispWalker] = useState(true);
  const [random, setRandom] = useState<RandomType>(null);

  const changeRnadom = () => {
    const setItem = random === 0 ? 1 : 0;
    setRandom(setItem);
  };

  const [dispCircle, setDispCircle] = useState(false);

  const [evoPop, setEvopop] = useState(true);
  const [evoWalk, setevoWalk] = useState(false);
  //追加
  //emotionData管理用のtypeの追加
  type emotionDataType = {
    happy: number;
    anger: number;
    sad: number;
    enjoyable: number;
    emoId: number;
  };

  const emotionInitialData = {
    happy: 0,
    anger: 0,
    sad: 0,
    enjoyable: 0,
    emoId: 0,
  };

  const [emotionData, setEmotionData] = useState<emotionDataType>(emotionInitialData);

  const handleSubmit = async () => {
    setDispCircle(true);
    setInputText('');
    setEmotionData(await EmotionApi(inputText, emotionData));
    setDispCircle(false);
    handleGrass();
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
  const evolution = () => {
    setrevopopup(true);
    setEvopop(false);
  };
  const WalkEvo = () => {
    setevoWalk(true);
  };
  //草生成用のハンドルを追加(食事回数と条件達成で進化先の分析)
  const handleGrass = () => {
    setEatCount(eatCount + 1);
    if (eatCount >= 4) {
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

  const isDisableTextField = () => {
    return eatCount > 4;
  };

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
          <Container disableGutters maxWidth="sm" sx={{ zIndex: 1, mt: 20 }}>
            <Box sx={{ height: '80vh' }}>
              <Grid container>
                <Grid item xs={2}>
                  <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
                </Grid>
                <Grid item xs={8} />
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
                    isDisableTextField={isDisableTextField()}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Box sx={{ height: '100px' }}></Box>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>
                  <Popup
                    emotionData={emotionData}
                    pop={pop}
                    popSubmit={popSubmit}
                    randomNum={random ?? 0}
                  />
                </Grid>
                <Grid item xs={6} bgcolor="red"></Grid>
                <Grid item xs={4} bgcolor="blue">
                  {revopopup && evoWalk ? null : <Evoanimee typeId={typeId} WalkEvo={WalkEvo} />}
                </Grid>
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
                  {
                    <Revopopup
                      eatCount={eatCount}
                      pop={pop}
                      evolution={evolution}
                      evoPop={evoPop}
                    />
                  }{' '}
                  {/*鈴木追加*/}
                </Grid>
                <Grid item xs={6} bgcolor="red">
                  {dispWalker && evoPop ? <RandomWalker /> : null}
                  {evoWalk ? <EvolutionWalk typeId={typeId} /> : null}
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
        {dispCircle ? (
          <Container
            maxWidth="sm"
            disableGutters
            sx={{
              position: 'absolute',
              top: '30vh',
            }}
          >
            <Stack direction="row" justifyContent="center" zIndex={10}>
              <CircularProgress size={60} />
            </Stack>
          </Container>
        ) : null}
      </ThemeProvider>
    </div>
  );
};

export default App;
