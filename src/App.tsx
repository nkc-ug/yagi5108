import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Tutorial from './Tutorial';
import Form from './Form';
import Flower from './Flower';
import Syokuzi from './SyokuziCon';
import Setting from './SettingsCon';
import bgImage from './assets/backGround.png';
import RandomWalker from './RandomWalker';
import BGMPlayer from './Bgm';
import bgm from './Audio/Bgm.mp3';
import EmotionApi from './EmotionApi';
import Revolution from './Revolution';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
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
      <Box
        style={{
          backgroundColor: 'black',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        position="relative"
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
            position: 'relative',
          }}
        >
          <img src={bgImage} alt="" style={{ width: 'auto', height: 'auto', maxHeight: '100vh' }} />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={250}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Form inputText={inputText} handleChange={handleChange} handleSubmit={handleSubmit} />
          </Box>
          <Box
            position="absolute"
            top={250}
            left={0}
            right={50}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Flower />
          </Box>
          <Box
            position="absolute"
            top={200}
            left={0}
            right={100}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <RandomWalker />
          </Box>

          <Box
            position="absolute"
            top={35}
            left={0}
            right={40}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Syokuzi />
          </Box>
          <Box
            position="absolute"
            top={630}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          ></Box>

          <Box style={{ position: 'absolute', top: 5, left: 500 }}>
            <BGMPlayer src={bgm} />
          </Box>
          <div style={{ position: 'absolute', top: 5, left: 0 }}>
            <Tutorial open={open} openclick={handleOpen} closeclick={handleClose} />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default App;
