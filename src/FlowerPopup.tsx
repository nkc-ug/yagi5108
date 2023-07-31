import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { EmotionDataType } from './types/EmotionDataType';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import yagi_left from './assets/yagi_left.png';
import yoro_hana from './assets/yoro_hana.png';
import yoro_kazitu from './assets/yoro_kazitu.png';
import ikari_hana from './assets/ikari_hana.png';
import ikari_kazitu from './assets/ikari_kazitu.png';
import kana_hana from './assets/kana_hana.png';
import kana_kazitu from './assets/kana_kazitu.png';
import tano_hana from './assets/tano_hana.png';
import tano_kazitu from './assets/tano_kazitu.png';

type Props = {
  emotionData: EmotionDataType;
  pop: boolean;
  popSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
  randomNum: number;
};
const FlowerPopup: FC<Props> = (props) => {
  const emoId = props.emotionData.emoId;
  const random = props.randomNum;

  type DispItem = {
    text: string;
    img: string;
  };

  const [dispItem, setDispItem] = useState<DispItem>({
    text: '',
    img: '',
  });

  const changeItem = () => {
    if (emoId === 1 && random === 0) {
      setDispItem({
        text: 'よろこびの草が',
        img: yoro_hana,
      });
      return;
    }
    if (emoId === 1 && random === 1) {
      setDispItem({
        text: 'よろこびの果実が',
        img: yoro_kazitu,
      });
      return;
    }
    if (emoId === 2 && random === 0) {
      setDispItem({
        text: '怒りの草が',
        img: ikari_hana,
      });
      return;
    }
    if (emoId === 2 && random === 1) {
      setDispItem({
        text: '怒りの果実が',
        img: ikari_kazitu,
      });
      return;
    }
    if (emoId === 3 && random === 0) {
      setDispItem({
        text: '悲しみの草が',
        img: kana_hana,
      });
      return;
    }
    if (emoId === 3 && random === 1) {
      setDispItem({
        text: '悲しみの果実が',
        img: kana_kazitu,
      });
      return;
    }
    if (emoId === 4 && random === 0) {
      setDispItem({
        text: '楽しみの草が',
        img: tano_hana,
      });
      return;
    }
    if (emoId === 4 && random === 1) {
      setDispItem({
        text: '楽しみの果実が',
        img: tano_kazitu,
      });
      return;
    }
  };

  useEffect(() => {
    changeItem();
  }, [emoId, random]);

  return (
    <div>
      {props.pop ? null : emoId === 0 ? (
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            color: '#000',
            border: '2px solid #FFF',
            boxShadow: 24,
            p: 4,
            backgroundImage: `url(${yagi_left})`,
            backgroundPosition: '-50px -300px',
            backgroundColor: 'brack',
            zIndex: 1,
          }}
        >
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, fontSize: '25px' }}
            textAlign={'center'}
          >
            草生成中！
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            boxShadow: 24,
            backgroundPosition: '-50px -300px',
            zIndex: 1,
            borderRadius: '10px',
          }}
        >
          <Stack sx={{ p: 5, borderRadius: '10px', bgcolor: 'white' }} spacing={3}>
            <Stack spacing={1} textAlign="center">
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {dispItem.text}
              </Typography>
              <Typography id="transition-modal-description" sx={{ opacity: 0.6, fontSize: '25px' }}>
                生えました！
              </Typography>
            </Stack>
            <Stack justifyContent="center" direction="row">
              <img src={dispItem.img} style={{ width: '100px' }} />
            </Stack>
            <Button
              size="large"
              variant="contained"
              onClick={props.popSubmit}
              sx={{ mx: 2, color: 'white' }}
            >
              食べさせる
            </Button>
          </Stack>
        </Box>
      )}
    </div>
  );
};
export default FlowerPopup;
