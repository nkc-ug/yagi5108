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
import yagi_syokuzi from './assets/yagi_syokuzi.png';
import yagi_left from './assets/yagi_left.png';

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
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);
  });

  return (
    <Box>
      <div>
        {randomNumber !== null
          ? (() => {
              switch (randomNumber) {
                //嬉
                case 0:
                  return random == 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${yoro_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${yoro_kazitu})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  );
                //怒
                case 1:
                  return random == 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${ikari_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${ikari_kazitu})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  );
                //哀
                case 2:
                  return random == 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${kana_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${kana_kazitu})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  );
                //楽
                case 3:
                  return random == 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${tano_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${tano_kazitu})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 1,
                      }}
                    />
                  );
                default:
                  return null;
              }
            })()
          : null}
        {showImage ? (
          <Box
            sx={{
              position: 'absolute',
              width: '130px',
              height: '130px',
              backgroundImage: `url(${yagi_syokuzi})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginTop: '-130px',
              marginLeft: '25px',
              zIndex: -1,
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              width: '130px',
              height: '130px',
              backgroundImage: `url(${yagi_left})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginTop: '-130px',
              marginLeft: '25px',
              zIndex: -1,
            }}
          />
        )}
      </div>
    </Box>
  );
};
export default Flower;
