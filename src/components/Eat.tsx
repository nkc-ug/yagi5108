import { FC } from 'react';
import Box from '@mui/material/Box';
import yoro_hana from '../assets/yoro_hana.png';
import yoro_kazitu from '../assets/yoro_kazitu.png';
import ikari_hana from '../assets/ikari_hana.png';
import ikari_kazitu from '../assets/ikari_kazitu.png';
import kana_hana from '../assets/kana_hana.png';
import kana_kazitu from '../assets/kana_kazitu.png';
import tano_hana from '../assets/tano_hana.png';
import tano_kazitu from '../assets/tano_kazitu.png';
import yagi_syokuzi from '../assets/yagi_syokuzi.png';
import yagi from '../assets/yagi.png';
import { EmotionDataType } from '../types/EmotionDataType';

type Props = {
  emotionData: EmotionDataType;
  eat: boolean;
  showImage: boolean;
  randomNum: number;
  containerSize: {
    width: number;
    height: number;
  };
};

const Eat: FC<Props> = ({ emotionData, eat, showImage, randomNum, containerSize }) => {
  const emoId = emotionData.emoId;
  const random = randomNum;
  const position = {
    x: (containerSize.width / 5) * 3,
    y: (containerSize.height / 12) * 11,
  };
  const grassTop = position.y + 68;
  const grassLeft = position.x - 10;
  return (
    <Box>
      <div>
        {eat
          ? (() => {
              switch (emoId) {
                //嬉
                case 1:
                  return random === 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${yoro_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
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
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
                      }}
                    />
                  );
                //怒
                case 2:
                  return random === 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${ikari_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
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
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
                      }}
                    />
                  );
                //哀
                case 3:
                  return random === 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${kana_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
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
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
                      }}
                    />
                  );
                //楽
                case 4:
                  return random === 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${tano_hana})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
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
                        zIndex: 2,
                        position: 'absolute',
                        left: `${grassLeft}px`,
                        top: `${grassTop}px`,
                      }}
                    />
                  );
                default:
                  return null;
              }
            })()
          : null}
        {eat ? (
          showImage ? (
            <Box
              sx={{
                position: 'absolute',
                width: '130px',
                height: '130px',
                backgroundImage: `url(${yagi_syokuzi})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 1,
              }}
            />
          ) : (
            <Box
              sx={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                height: '130px',
                backgroundImage: `url(${yagi})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                marginTop: '-125px',
                marginLeft: '22px',
                zIndex: -1,
              }}
            />
          )
        ) : null}
      </div>
    </Box>
  );
};
export default Eat;
