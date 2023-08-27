import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../const/eatLimit';
import { EmotionDataType } from '../types/EmotionDataType';
import { modalStyle } from '../styles/ModalStyle';

type Props = {
  monster: number;
  eatCount: number;
  open: boolean;
  emotionData: EmotionDataType;
  openclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Battleresult: FC<Props> = (Props) => {
  const [label, setlabel] = useState('');
  const emoId = Props.emotionData.emoId;
  useEffect(() => {
    if (Props.monster === emoId) {
      setlabel('ヤギはたたかいにかったようだ！やぎをほめよう！');
    } else {
      setlabel('ヤギはたたかいにまけてしまった！やぎをはげまそう！');
    }
  }, []);

  return (
    <div>
      {Props.eatCount > EATLIMIT ? (
        <Modal
          open={Props.open}
          onClose={Props.closeclick}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={Props.open}>
            <Stack sx={modalStyle} spacing={3}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                textAlign={'center'}
                sx={{
                  fontSize: '40px',
                }}
              >
                ヤギはモンスターとたたかった！
              </Typography>
              <Stack justifyContent="center" spacing={1}>
                <Typography variant="h6" textAlign={'center'}>
                  {label}
                </Typography>
              </Stack>
              <Stack justifyContent="center" direction="row">
                <Button variant="contained" sx={{ color: 'white' }} onClick={Props.closeclick}>
                  たたかいをつづける
                </Button>
              </Stack>
            </Stack>
          </Fade>
        </Modal>
      ) : null}
    </div>
  );
};
export default Battleresult;
