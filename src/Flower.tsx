import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import yoro_hana from './assets/yoro_hana.png';
import yoro_kazitu from './assets/yoro_kazitu.png';
import ikari_hana from './assets/ikari_hana.png';
import ikari_kazitu from './assets/ikari_kazitu.png';
import kana_hana from './assets/kana_hana.png';
import kana_kazitu from './assets/kana_kazitu.png';
import tano_hana from './assets/tano_hana.png';
import tano_kazitu from './assets/tano_kazitu.png';

const Flower = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [random, setRandom] = useState<number | null>(null);
  useEffect(() => {
    // 0または1のランダムな数を生成
    const random = Math.floor(Math.random() * 2);
    setRandom(random);
  }, []);
  //受け取るであろう値の実験
  useEffect(() => {
    // 0から3までのランダムな数を生成
    const randomNum = Math.floor(Math.random() * 4);
    setRandomNumber(randomNum);
  }, []);

  const getRandomPosition = () => {
    const boxWidth = 300;
    const boxHeight = 270;

    // ランダムな位置を計算
    const posX = Math.floor(Math.random() * (boxWidth - 70));
    const posY = Math.floor(Math.random() * (boxHeight - 70));

    return {
      left: posX,
      top: posY,
    };
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '70px',
        height: '70px',
      }}
    >
      {randomNumber !== null
        ? (() => {
            switch (randomNumber) {
              //嬉
              case 0:
                return random == 0 ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${yoro_hana})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${yoro_kazitu})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                );
              //怒
              case 1:
                return random == 0 ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${ikari_hana})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${ikari_kazitu})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                );
              //哀
              case 2:
                return random == 0 ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${kana_hana})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${kana_kazitu})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                );
              //楽
              case 3:
                return random == 0 ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${tano_hana})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      backgroundImage: `url(${tano_kazitu})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                );
              default:
                return null;
            }
          })()
        : null}
    </Box>
  );
};
export default Flower;
