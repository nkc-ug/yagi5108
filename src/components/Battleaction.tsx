import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/tutorial.png';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../const/eatLimit';
import { EmotionDataType } from '../types/EmotionDataType';

import yagi_yorokobi from '../assets/yagi_yorokobi.png';
import yagi_ikari from '../assets/yagi_iakri.png';
import yagi_kanasimi from '../assets/yagi_kanasimi.png';
import yagi_tanosii from '../assets/yagi_tanosii.png';
import yagi_yorokobi_right from '../assets/yagi_yorokobi_right.png';
import yagi_ikari_right from '../assets/yagi_iakri_right.png';
import yagi_kanasimi_right from '../assets/yagi_kanasimi_right.png';
import yagi_tanosii_right from '../assets/yagi_tanosii_right.png';

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
  open: boolean;
  emotionData: EmotionDataType;
  openclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  closeclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Battleresult: FC<Props> = (Props) => {
  const [monsterimg, setmonsterimg] = useState('');
  const [yagiimg, setyagiimg] = useState('');
  const emoId = Props.emotionData.emoId;
  useEffect(() => {
    switch (Props.monster) {
      case 1:
        setmonsterimg(yagi_yorokobi_right);
        break;
      case 2:
        setmonsterimg(yagi_ikari_right);
        break;
      case 3:
        setmonsterimg(yagi_kanasimi_right);
        break;
      case 4:
        setmonsterimg(yagi_tanosii_right);
        break;
    }

    switch (emoId) {
      case 1:
        setyagiimg(yagi_yorokobi);
        break;
      case 2:
        setyagiimg(yagi_ikari);
        break;
      case 3:
        setyagiimg(yagi_kanasimi);
        break;
      case 4:
        setyagiimg(yagi_tanosii);
        break;
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
            <Stack sx={style} spacing={3}>
              <Stack>
                {/* <image 
                     src={yagiimg} 
                     style={{
                        width: '200px',  // 画像の幅を調整
                        height: '200px',  // 高さを自動調整
                        position: 'absolute',  // 絶対位置に配置
                        top: '50px',  // 上から50pxの位置に配置
                        left: '10%',  // 左から中央に配置
                        transform: 'translateX(-50%)',  // 左右中央揃え
                      }}
                    />
                    <img 
                     src={monsterimg}
                     style={{
                        width: '200px',  // 画像の幅を調整
                        height: '200px',  // 高さを自動調整
                        position: 'absolute',  // 絶対位置に配置
                        top: '50px',  // 上から50pxの位置に配置
                        left: '75%',  // 左から中央に配置
                        transform: 'translateX(-50%)',  // 左右中央揃え
                      }}

                    /> */}
              </Stack>
            </Stack>
          </Fade>
        </Modal>
      ) : null}
    </div>
  );
};
export default Battleresult;
