import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/tutorial.png';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../const/eatLimit';

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
  eatCount: number;
  monster: number;
  open: boolean;
  openclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Battle: FC<Props> = ({ open, monster, openclick, closeclick,eatCount }) => {
  const [monsterlabel1, setmonsterlabel1] = useState('');
  const [monsterlabel2, setmonsterlabel2] = useState('');
  const labelList = [
    'このモンスターは',
    monsterlabel1,
    'よわいようだ！',
    'ことばをたべさせて',
    monsterlabel2,
    'やぎをそだてよう',
  ];

  useEffect(() => {
    switch (monster) {
      case 1:
        setmonsterlabel1('よろこびのかんじょうに');
        setmonsterlabel2('やぎをよろこびのかんじょうに');
        break;
      case 2:
        setmonsterlabel1('いかりのかんじょうに');
        setmonsterlabel2('やぎをいかりのかんじょうに');
        break;
      case 3:
        setmonsterlabel1('かなしいのかんじょうに');
        setmonsterlabel2('やぎをかなしいのかんじょうに');
        break;
      case 4:
        setmonsterlabel1('たのしいのかんじょうに');
        setmonsterlabel2('やぎをたのしいかんじょうに');
        break;
    }
  }, [monster]);

  return (
    <div>
      {eatCount > EATLIMIT ? null : (
      <Modal
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
              モンスターがあらわれた！！
            </Typography>
            <Stack justifyContent="center" spacing={1}>
              {labelList.map((label) => (
                <Typography key={label} variant="h6" textAlign={'center'}>
                  {label}
                </Typography>
              ))}
            </Stack>
            <Stack justifyContent="center" direction="row">
              <Button variant="contained" sx={{ color: 'white' }} onClick={closeclick}>
                やぎをそだてる
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
      )}
    </div>
  );
};
export default Battle;
