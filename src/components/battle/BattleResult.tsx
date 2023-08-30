import { FC, useState, useEffect, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../../const/eatLimit';
import { EmotionDataType } from '../../types/EmotionDataType';
import { modalStyle } from '../../styles/modalStyle';
import { MonsterNumberContext } from '../../provider/ContextProviders';

type Props = {
  eatCount: number;
  open: boolean;
  typeId: number;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const BattleResult: FC<Props> = ({ eatCount, open, typeId, closeClick }) => {
  const [monster] = useContext(MonsterNumberContext);
  const [label, setLabel] = useState('');
  useEffect(() => {
    if (monster === typeId) {
      setLabel('ヤギはたたかいにかったようだ！やぎをほめよう！');
    } else {
      setLabel('ヤギはたたかいにまけてしまった！やぎをはげまそう！');
    }
  }, [monster, typeId]);

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
