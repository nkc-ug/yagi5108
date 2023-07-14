import React, { useEffect, useState } from 'react';
import { Container, Stack, Grid, Box, ThemeProvider, CircularProgress } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Eat from './Eat';
import bgImage from './assets/backGround.png';
import NormalWalk from './NormalWalk';
import { getEmotionApi } from './getEmotionApi';
import Branch from './Branch';
import FlowerPopup from './FlowerPopup';
import EvolutionPopup from './EvolutionPopup';
import EvolutionWalk from './EvolutionWalk';
import { theme } from './theme/theme';
import { NavBar } from './NavBar';
import Pulse from './Pulse';

const App: React.FC = () => {
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(true); //遊び方の表示
  const [pop, handlepop] = useState(true); //生成された草のポップアップの表示
  const [eat, handleeat] = useState(false); //食事するヤギの表示
  const [showImage, setShowImage] = useState(false); //生成された草の表示（これいらんかもしれん）
  const [inputText, setInputText] = useState(''); //フォームに入力された文字を管理
  const [eatCount, setEatCount] = useState(1); //食べた回数と進化先の変数の追加(eatCount,typeId)
  const [typeId, setTypeId] = useState(-1); //進化先のIDを格納
  const [EvoPopup, setEvoPopup] = useState(false); //進化するタイミングで表示されるポップアップの表示
  const [dispWalker, setDispWalker] = useState(true); //通常状態の移動するヤギの表示
  const [random, setRandom] = useState<RandomType>(null); //草か果実かを定める
  const [evoPop, setEvopop] = useState(true); //進化時のポップアップの表示
  const [evoWalk, setevoWalk] = useState(false); //進化したヤギの表示
  const [dispCircle, setDispCircle] = useState(false); //ロード画面の表示

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleTutorialModalOpen = () => setIsTutorialModalOpen(true);
  const handleTutorialModalClose = () => setIsTutorialModalOpen(false);

  type RandomType = 0 | 1 | null;
  const changeRnadom = () => {
    const setItem = random === 0 ? 1 : 0;
    setRandom(setItem);
  };
  type emotionDataType = {
    //emotionData管理用のtypeの追加
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
    setEmotionData(await getEmotionApi(inputText, emotionData));
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
    setEvoPopup(true);
    setEvopop(false);
    setevoWalk(true);
  };
  const WalkEvo = () => {
    setevoWalk(false);
  };
  //草生成用のハンドルを追加(食事回数と条件達成で進化先の分析)
  const handleGrass = () => {
    setEatCount(eatCount + 1);
    if (eatCount >= 4) {
      setTypeId(Branch(emotionData));
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
                  <Tutorial
                    open={isTutorialModalOpen}
                    openclick={handleTutorialModalOpen}
                    closeclick={handleTutorialModalClose}
                  />
                </Grid>
                <Grid item xs={8} />
                <Grid item xs={2} />
              </Grid>
              <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10}>
                  <Form
                    inputText={inputText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isDisableTextField={isDisableTextField()}
                  />
                </Grid>
                <Grid item xs={1} />
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Box sx={{ height: '100px' }} />
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={3} />
              </Grid>
              <Grid container>
                <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>
                  <FlowerPopup
                    emotionData={emotionData}
                    pop={pop}
                    popSubmit={popSubmit}
                    randomNum={random ?? 0}
                  />
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={4}>
                  {EvoPopup && evoWalk ? <Pulse typeId={typeId} walkEvo={WalkEvo} /> : null}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Eat
                  emotionData={emotionData}
                  eat={eat}
                  showImage={showImage}
                  randomNum={random ?? 0}
                />
              </Grid>
              <Grid item xs={3} />
              <Grid container>
                <Grid item xs={2} bgcolor="yellow">
                  <EvolutionPopup
                    eatCount={eatCount}
                    pop={pop}
                    evolution={evolution}
                    evoPop={evoPop}
                  />
                </Grid>
                <Grid item xs={6} bgcolor="red">
                  {dispWalker && evoPop ? <NormalWalk /> : null}
                  {evoWalk ? null : <EvolutionWalk typeId={typeId} />}
                </Grid>
                <Grid item xs={4} />
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
            bottom: 30,
          }}
        >
          <NavBar handleTutorialChange={handleTutorialModalOpen} />
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
