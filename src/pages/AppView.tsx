import React, { FC, useEffect, useState } from 'react';
import { Container, Stack, Grid, Box } from '@mui/material';
import Tutorial from '../components/Tutorial';
import Form from '../components/Form';
import Eat from '../components/Eat';
import NormalWalk from '../components/NormalWalk';
import { getEmotionApi } from '../api/getEmotionApi';
import { Branch } from '../components/Branch';
import { ShowNewGrassModal } from '../components/ShowNewGrassModal';
import EvolutionPopup from '../components/EvolutionPopup';
import EvolutionWalk from '../components/EvolutionWalk';
import Pulse from '../components/Pulse';
import { useDiscloser } from '../hooks/useDiscloser';
import { EmotionDataType } from '../types/EmotionDataType';
import { EATLIMIT } from '../const/eatLimit';
import noon from '../assets/noon.png';
import night from '../assets/night.png';
import sougen from '../assets/sougen.png';
import umi from '../assets/umi.png';
import mori from '../assets/mori.png';
import { PageContainer } from '../components/PageContainer';
import { useInput } from '../hooks/useInput';
import { CircleProgressCon } from '../components/common/CircleProgressCon';
import { NavBarCon } from '../components/navbar/NavBarCon';

type RandomType = 0 | 1 | null;

const emotionInitialData = {
  Joy: 0,
  Anger: 0,
  Sorrow: 0,
  Enjoyable: 0,
  emoId: 0,
};

export const AppView: FC = () => {
  /**
   * Popupの表示
   *
   * - isShowGrassPopup: 草のポップアップ
   *
   */
  const [isShowNewGrassModal, setIsShowNewGrassModal] = useState<boolean>(false);

  const [eat, handleEat] = useState(false); //食事するヤギの表示
  const [showImage, setShowImage] = useState(false); //生成された草の表示（これいらんかもしれん）
  const [inputText, setInputText, handleInputText] = useInput(''); //フォームに入力された文字を管理
  const [eatCount, setEatCount] = useState(1); //食べた回数と進化先の変数の追加(eatCount,typeId)
  const [typeId, setTypeId] = useState(-1); //進化先のIDを格納
  const [EvoPopup, setEvoPopup] = useState(false); //進化するタイミングで表示されるポップアップの表示
  const [dispWalker, setDispWalker] = useState(true); //通常状態の移動するヤギの表示
  const [random, setRandom] = useState<RandomType>(null); //草か果実かを定める
  const [evoPop, setEvoPop] = useState(true); //進化時のポップアップの表示
  const [evoWalk, setEvoWalk] = useState(false); //進化したヤギの表示
  const [dispCircle, setDispCircle] = useState(false); //ロード画面の表示
  const [EmotionMax, setMax] = useState<number>(0);
  const [Emotion, setEmotion] = useState([0, 0, 0, 0]);
  const [overlap, setOverlap] = useState<boolean>(false);
  const [monster, setMonster] = useState<number>(0);
  const [containerSize, setContainerSize] = useState({ width: 260, height: 600 });
  const [emotionData, setEmotionData] = useState<EmotionDataType>(emotionInitialData);
  const [isTutorialModalOpen, handleTutorialModalOpen, handleTutorialModalClose] =
    useDiscloser(true);
  const [isBattleModalOpen, handleBattleModalOpen, handleBattleModalClose] = useDiscloser(false);
  const [costume, setCostume] = useState<number>(0); //0何もなし1着ぐるみ2着物3メイド4水着5ナース6警察7セーラー服8童貞殺セーター9郵便

  const [ground, setGround] = useState<number>(1); //1草原２海３森
  const setGroundImage = (ground: number) => {
    {
      switch (ground) {
        case 1:
          return sougen;
        case 2:
          return umi;
        case 3:
          return mori;
      }
    }
  };
  const groundImage = setGroundImage(ground); //背景(地面の設定)

  const [sky, setSky] = useState<number>(1); //1昼２夜
  const setSkyImage = (ground: number) => {
    {
      switch (ground) {
        case 1:
          return noon;
        case 2:
          return night;
      }
    }
  };
  const skyImage = setSkyImage(ground); //背景(空の設定)

  const changeRandome = () => {
    const setItem = random === 0 ? 1 : 0;
    setRandom(setItem);
  };

  useEffect(() => {
    setMonster(Math.floor(Math.random() * (4 - 1 + 1)) + 1);
  }, [monster]);

  const handleSubmit = async () => {
    // ロード画面の表示・入力欄の初期化
    setDispCircle(true);
    setInputText('');

    // 感情データの取得
    setEmotionData(await getEmotionApi(inputText, emotionData));

    // ロード画面を非表示・草が生えました！のポップアップを表示・ランダム
    setDispCircle(false);
    setIsShowNewGrassModal(true);
    changeRandome();
    handleGrass();
  };

  /**
   * 草が生えました！のポップアップのsubmit
   */
  const showGrassModalSubmit = () => {
    // 草が生えました！のポップアップを非表示・食事するヤギの表示・通常のヤギを非表示
    setIsShowNewGrassModal(false);
    handleEat(true);
    setDispWalker(false);

    // 2秒後 食事するヤギを非表示・通常のヤギを表示
    setTimeout(() => {
      handleEat(false);
      setDispWalker(true);
    }, 2000);
  };

  const walking = () => {
    handleEat(false);
  };
  const evolution = () => {
    setEvoPopup(true);
    setEvoPop(false);
  };
  const WalkEvo = () => {
    setEvoWalk(true);
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
      <PageContainer updatePageSize={updatePageSize} />
      <Stack direction="row" justifyContent="center">
        <Container
          disableGutters
          maxWidth="sm"
          style={{
            backgroundImage: `url(${skyImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '70vh',
            width: '100%',
            objectFit: 'cover',
          }}
        >
          <Container disableGutters maxWidth="sm" sx={{ mt: 10 }}>
            <FlowerPopup
              emotionData={emotionData}
              isOpen={isShowNewGrassModal}
              popSubmit={showGrassModalSubmit}
              randomNum={random ?? 0}
            />
            <Tutorial open={isTutorialModalOpen} closeClick={handleTutorialModalClose} />
            {EvoPopup ? (
              <Pulse typeId={typeId} walkEvo={WalkEvo} containerSize={containerSize} />
            ) : null}
            <EvolutionPopup
              eatCount={eatCount}
              pop={!isShowNewGrassModal}
              evolution={evolution}
              evoPop={evoPop}
            />
            <Box sx={{ height: '80vh' }}>
              <Form
                inputText={inputText}
                handleChange={handleInputText}
                handleSubmit={handleSubmit}
                isDisableTextField={isDisableTextField()}
              />
              <Container
                style={{
                  backgroundImage: `url(${groundImage})`,
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

      {/* ナビゲーションバー */}
      <NavBarCon handleTutorialModalOpen={handleTutorialModalOpen} />

      {/* ロード画面 */}
      <CircleProgressCon isOpen={dispCircle} />
    </div>
  );
};
