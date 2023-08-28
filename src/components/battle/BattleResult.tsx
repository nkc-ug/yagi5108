import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../../const/eatLimit';
import { EmotionDataType } from '../../types/EmotionDataType';
import { modalStyle } from '../../styles/modalStyle';

type Props = {
  monster: number;
  eatCount: number;
  open: boolean;
  emotionData: EmotionDataType;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const BattleResult: FC<Props> = ({ monster, eatCount, open, emotionData, closeClick }) => {
  const [label, setLabel] = useState('');
  const emoId = emotionData.emoId;
  useEffect(() => {
    if (monster === emoId) {
      setLabel('ヤギはたたかいにかったようだ！やぎをほめよう！');
    } else {
      setLabel('ヤギはたたかいにまけてしまった！やぎをはげまそう！');
    }
  }, []);

  return (
    <div>
      {eatCount > EATLIMIT ? (
        <Modal
          open={open}
          onClose={closeClick}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
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
                <Button variant="contained" sx={{ color: 'white' }} onClick={closeClick}>
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
export default BattleResult;
