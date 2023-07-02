import { FC } from 'react';
import Box from '@mui/material/Box';
import { emotionDataType } from './Revolution';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import yagi_syokuzi from './assets/yagi_syokuzi.png';
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
  emotionData: emotionDataType;
  pop: boolean;
  popSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
  randomNum: number;
};
const Popup: FC<Props> = (props) => {
  const emoId = props.emotionData.emoId;
  const random = props.randomNum;

  const dispItemStr = () => {
    switch (emoId) {
      //嬉
      case 1:
        return 'よろこびの草が';
      //怒
      case 2:
        return '怒りの草が';
      //悲
      case 3:
        return '悲しみの草が';
      //楽
      case 4:
        return '楽しみの草が';
    }
  };

  // const dispItemImg = () => {
  //   if(emoId == 1 && ){

  return (
    <div>
      {props.pop ? null : emoId == 0 ? (
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
            height: '300px',
            boxShadow: 24,
            p: 5,
            backgroundImage: `url(${yagi_syokuzi})`,
            backgroundPosition: '-50px -300px',
            backgroundColor: 'brack',
            zIndex: 1,
            borderRadius: '10px',
          }}
        >
          <Stack sx={{ p: 5, borderRadius: '10px', bgcolor: 'white' }}>
            <Stack spacing={1} textAlign="center">
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {dispItemStr()}
              </Typography>
              <Typography id="transition-modal-description" sx={{ opacity: 0.6, fontSize: '25px' }}>
                生えました！
              </Typography>
            </Stack>
            <Box></Box>
            <Button
              size="large"
              variant="contained"
              onClick={props.popSubmit}
              sx={{ mt: 10, mx: 2, color: 'white' }}
            >
              食べさせる
            </Button>
          </Stack>
        </Box>
      )}
    </div>
  );
};
export default Popup;
