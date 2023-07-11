import { useState, useEffect } from 'react';
import { FC } from 'react';
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
import { emotionDataType } from './Branch';

type Props = {
  emotionData: emotionDataType;
  eat: boolean;
  showImage: boolean;
  randomNum: number;
};
const Eat: FC<Props> = (props) => {
  const emoId = props.emotionData.emoId;
  const random = props.randomNum;

  const bgurl = () => {
    switch (emoId) {
      //嬉
      case 1:
        return yoro_hana;
    }
  };

  return (
    <Box>
      <div>
        {props.eat
          ? (() => {
              switch (emoId) {
                //嬉
                case 1:
                  return random == 0 ? (
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: `url(${bgurl})`,
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
                case 2:
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
                case 3:
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
                case 4:
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
        {props.eat ? (
          props.showImage ? (
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
