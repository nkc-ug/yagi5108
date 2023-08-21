import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/tutorial.png';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../const/eatLimit';
import { EmotionDataType } from '../types/EmotionDataType';

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
  monster: number;
  eatCount: number;
  Bopen: boolean;
  emotionData: EmotionDataType;
  Bopenclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  Bcloseclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Battleresult: FC<Props> = (Props) => {
  const [label,setlabel] = useState('');
  const emoId = Props.emotionData.emoId;
  
if (Props.monster === emoId){
  setlabel("ヤギはたたかいにかったようだ！やぎをほめよう！")
}else{
  setlabel("ヤギはたたかいにまけてしまった！やぎをはげまそう！")
}

  return (
    <div>
      {Props.eatCount > EATLIMIT ? (
      <Modal
        open={Props.Bopen}
        onClose={Props.Bcloseclick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={Props.Bopen}>
          <Stack sx={style} spacing={3}>
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
              <Button variant="contained" sx={{ color: 'white' }} onClick={Props.Bcloseclick}>
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
