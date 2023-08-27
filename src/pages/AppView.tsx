import React, { useEffect, useState } from 'react';
import { Container, Stack, Grid, Box, ThemeProvider, CircularProgress } from '@mui/material';
import Tutorial from '../components/Tutorial';
import Form from '../components/Form';
import Eat from '../components/Eat';
import NormalWalk from '../components/NormalWalk';
import { getEmotionApi } from '../components/getEmotionApi';
import { Branch } from '../components/Branch';
import FlowerPopup from '../components/FlowerPopup';
import EvolutionPopup from '../components/EvolutionPopup';
import EvolutionWalk from '../components/EvolutionWalk';
import { theme } from '../theme/theme';
import { NavBar } from '../components/NavBar';
import Pulse from '../components/Pulse';
import { useDiscloser } from '../hooks/useDiscloser';
import { useBatcloser } from '../hooks/useBatcloser';
import { EmotionDataType } from '../types/EmotionDataType';
import { EATLIMIT } from '../const/eatLimit';
import Battle from '../components/Battle';
import Battleresult from '../components/Battleresult';
import Battleacstion from '../components/Battleaction';
import noon from '../assets/noon.png';
// import night from '../assets/night.png';
// import sougen from '../assets/sougen.png';
// import umi from '../assets/umi.png';
import mori from '../assets/mori.png';
import { PageContainer } from '../components/PageContainer';

export const AppView: React.FC = () => {
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
  const [EmotionMax, setMax] = useState<number>(0);
  const [Emotion, setEmotion] = useState([0, 0, 0, 0]);
  const [overlap, setOverlap] = useState<boolean>(false);
  const [monster, setmonster] = useState<number>(0);
  const [containerSize, setContainerSize] = useState({ width: 260, height: 600 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  useEffect(() => {
    setmonster(Math.floor(Math.random() * (4 - 1 + 1)) + 1);
  }, [monster]);

  const { isTutorialModalOpen, handleTutorialModalOpen, handleTutorialModalClose } =
    useDiscloser(true);
  const { isBattleModalOpen, handleBattleModalOpen, handleBattleModalClose } = useBatcloser(false);
  type RandomType = 0 | 1 | null;
  const changeRnadom = () => {
    const setItem = random === 0 ? 1 : 0;
    setRandom(setItem);
  };
  type emotionDataType = EmotionDataType;

  const emotionInitialData = {
    Joy: 0,
    Anger: 0,
    Sorrow: 0,
    Enjoyable: 0,
    emoId: 0,
  };

  const [emotionData, setEmotionData] = useState<emotionDataType>(emotionInitialData);

  const handleSubmit = async () => {
    setDispCircle(true);
    setInputText('');
    setEmotionData(await getEmotionApi(inputText, emotionData));
    setDispCircle(false);
    handlepop(false);
    changeRnadom();
    handleGrass();
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
  };
  const WalkEvo = () => {
    setevoWalk(true);
    setEvoPopup(false);
  };
  //草生成用のハンドルを追加(食事回数と条件達成で進化先の分析)
  const handleGrass = () => {
    setEatCount(eatCount + 1);

    // setTypeId(Branch(emotionData,EmotionMax={EmotionMax},setMax={setMax},Emotion,setEmotion,overlap,setOverlap));
    setTypeId(
      Branch({
        emotionData,
        EmotionMax,
        setMax,
        Emotion,
        setEmotion,
        overlap,
        setOverlap,
      })
    );
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
  }, [eat, showImage]);

  const isDisableTextField = () => {
    return eatCount > EATLIMIT;
  };

  const updatePageSize = (
    newContainerSize: React.SetStateAction<{ width: number; height: number }>
  ) => {
    setContainerSize(newContainerSize);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <PageContainer updatePageSize={updatePageSize} />
        <Stack direction="row" justifyContent="center">
          <Container
            disableGutters
            maxWidth="sm"
            style={{
              backgroundImage: `url(${noon})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '70vh',
              width: '100%',
              objectFit: 'cover',
            }}
          >
            <Container disableGutters maxWidth="sm" sx={{ mt: 10 }}>
              <Battle
                eatCount={eatCount}
                monster={monster}
                open={isBattleModalOpen}
                openclick={handleBattleModalOpen}
                closeclick={handleBattleModalClose}
              />
              {/* <Battleacstion
                monster={monster}
                eatCount={eatCount}
                emotionData={emotionData}
                open={isBattleModalOpen}
                openclick={handleBattleModalOpen}
                closeclick={handleBattleModalClose}
              /> */}
              <Battleresult
                monster={monster}
                eatCount={eatCount}
                emotionData={emotionData}
                open={isBattleModalOpen}
                openclick={handleBattleModalOpen}
                closeclick={handleBattleModalClose}
              />
              <FlowerPopup
                emotionData={emotionData}
                pop={pop}
                popSubmit={popSubmit}
                randomNum={random ?? 0}
              />
              <Tutorial open={isTutorialModalOpen} closeclick={handleTutorialModalClose} />
              {EvoPopup ? (
                <Pulse typeId={typeId} walkEvo={WalkEvo} containerSize={containerSize} />
              ) : null}
              <EvolutionPopup eatCount={eatCount} pop={pop} evolution={evolution} evoPop={evoPop} />
              <Box sx={{ height: '80vh' }}>
                <Form
                  inputText={inputText}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isDisableTextField={isDisableTextField()}
                  handleBattleChange={handleBattleModalOpen}
                />
                <Container
                  style={{
                    backgroundImage: `url(${mori})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    height: '60vh',
                    width: '100%',
                  }}
                >
                  <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={6}>
                      <Eat
                        emotionData={emotionData}
                        eat={eat}
                        showImage={showImage}
                        randomNum={random ?? 0}
                        containerSize={containerSize}
                      />
                      {dispWalker && evoPop ? <NormalWalk containerSize={containerSize} /> : null}
                      {evoWalk ? (
                        <EvolutionWalk typeId={typeId} containerSize={containerSize} />
                      ) : null}
                    </Grid>
                    <Grid item xs={4} />
                  </Grid>
                </Container>
              </Box>
            </Container>
          </Container>
        </Stack>
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 3,
          }}
        >
          <NavBar
            handleTutorialChange={handleTutorialModalOpen}
            handleBattleChange={handleBattleModalOpen}
          />
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
