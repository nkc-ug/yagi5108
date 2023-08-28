import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { modalStyle } from '../styles/modalStyle';

const labelList = new Map([
  [0, 'ことばをたべさせて'],
  [1, 'ヤギをそだてよう！'],
  [2, 'ことばによって '],
  [3, 'ヤギのようすがかわるよ'],
]);

type Props = {
  open: boolean;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Tutorial: FC<Props> = ({ open, closeClick }) => {
  return (
    <div>
      {/* <IconButton onClick={openClick} color="primary">
        <QuestionMarkIcon fontSize="large" color="primary" />
      </IconButton> */}
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
              あそびかた
            </Typography>
            <Stack justifyContent="center" spacing={1}>
              {[...labelList].map(([key]) => (
                <Typography key={key} variant="h6" textAlign={'center'} sx={{ mt: 2 }}>
                  {labelList.get(key)}
                </Typography>
              ))}
            </Stack>
            <Stack justifyContent="center" direction="row">
              <Button variant="contained" sx={{ color: 'white' }} onClick={closeClick}>
                やぎとあそぶ
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
};
export default Tutorial;
