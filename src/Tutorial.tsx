import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import backgroundImage from './assets/tutorial.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
  border: '2px solid #FFF',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  openclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#e9e4d4',
    },
  },
});
const Tutorial: FC<Props> = ({ open, openclick, closeclick }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={openclick} color="primary">
          <QuestionMarkIcon />
        </Button>
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
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                textAlign={'center'}
                sx={{
                  fontSize: '40px',
                }}
              >
                遊び方
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                言葉を入力して草を生やそう！
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                入力した言葉が持つ喜怒哀楽によって生えてくる草が変わるよ！
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                生えてきた草をヤギが食べるよ！
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                たくさん食べたヤギは進化するよ！
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                ヤギに言葉の草をたくさん食べさせよう！
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default Tutorial;
