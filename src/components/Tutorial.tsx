import { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { modalStyle } from '../styles/modalStyle';
import { TutorialContext } from '../provider/ContextProviders';

const labelList = new Map([
  [0, 'ことばをたべさせて'],
  [1, 'ヤギをそだてよう！'],
  [2, 'ことばによって '],
  [3, 'ヤギのようすがかわるよ'],
]);

const Tutorial = () => {
  const [isTutorialModal, setIsTutorialModal] = useContext(TutorialContext);
  return (
    <div>
      <Modal
        open={isTutorialModal}
        onClose={() => {
          setIsTutorialModal(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isTutorialModal}>
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
              <Button
                variant="contained"
                sx={{ color: 'white' }}
                onClick={() => {
                  setIsTutorialModal(false);
                }}
              >
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
