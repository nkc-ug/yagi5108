import { FC } from 'react';
import Box from '@mui/material/Box';
import { emotionDataType } from './Revolution';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import yagi_syokuzi from './assets/yagi_syokuzi.png';
import yagi_left from './assets/yagi_left.png';

type Props = {
  emotionData: emotionDataType;
  pop: boolean;
  popSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
const Popup: FC<Props> = (props) => {
  const emoId = props.emotionData.emoId;

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
            color: '#000',
            border: '2px solid #FFF',
            boxShadow: 24,
            p: 4,
            backgroundImage: `url(${yagi_syokuzi})`,
            backgroundPosition: '-50px -300px',
            backgroundColor: 'brack',
            zIndex: 1,
          }}
        >
          <Stack>
            <Box sx={{ mt: 2, borderRadius: '10px', bgcolor: 'white' }}>
              <Typography
                id="transition-modal-description"
                sx={{ opacity: 0.6, p: 1, fontSize: '25px' }}
                textAlign={'center'}
              >
                草をあげました！
              </Typography>
            </Box>
            <Button
              size="large"
              variant="contained"
              onClick={props.popSubmit}
              sx={{ mt: 10, mx: 10, color: 'white' }}
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
