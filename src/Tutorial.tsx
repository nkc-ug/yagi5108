import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import backgroundImage from './assets/tutorial.png';
import { Button, Stack } from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  color: '#000',

  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '1.5px solid #FFF',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};

type Props = {
  open: boolean;
  openclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Tutorial: FC<Props> = ({ open, openclick, closeclick }) => {
  return (
    <div>
      {/* <IconButton onClick={openclick} color="primary">
        <QuestionMarkIcon fontSize="large" color="primary" />
      </IconButton> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeclick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Stack sx={style} spacing={3}>
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
              <Typography variant="h6" textAlign={'center'} sx={{ mt: 2 }}>
                ことばをたべさせて
                <br />
                やぎをそだてよう！
              </Typography>
              <Typography variant="h6" textAlign={'center'} sx={{ mt: 2 }}>
                ことばによって <br />
                ヤギのようすがかわるよ
              </Typography>
            </Stack>
            <Stack justifyContent="center" direction="row">
              <Button variant="contained" sx={{ color: 'white' }} onClick={closeclick}>
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
