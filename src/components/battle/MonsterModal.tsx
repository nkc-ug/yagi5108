import { Backdrop, Button, Fade, Stack, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { MonstermodalStyle } from '../../styles/MonstermodalStyle';
import { useNavigate } from 'react-router-dom';
type Props = {
  monsternumber: string;
  open: boolean;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const MonsterModal: FC<Props> = ({ open, closeClick, monsternumber }) => {
  const labelList = (() => {
    switch (monsternumber) {
      case 'monster_ikari':
        return (
          <div>
            このモンスターは
            <br />
            いかりのかんじょうに
            <br />
            よわいようだ!
            <br />
            ことばをたべさせて
            <br />
            やぎをよろこびのかんじょうに
            <br />
            そだてよう
          </div>
        );
      case 'monster_kanasii':
        return (
          <div>
            このモンスターは
            <br />
            かなしいのかんじょうに
            <br />
            よわいようだ!
            <br />
            ことばをたべさせて
            <br />
            やぎをいかりのかんじょうに
            <br />
            そだてよう
          </div>
        );
      case 'monster_tanosii':
        return (
          <div>
            このモンスターは
            <br />
            たのしいかんじょうに
            <br />
            よわいようだ!
            <br />
            ことばをたべさせて
            <br />
            かなしいかんじょうに
            <br />
            そだてよう
          </div>
        );
      case 'monster_yorokobi':
        return (
          <div>
            このモンスターは
            <br />
            うれしいのかんじょうに
            <br />
            よわいようだ!
            <br />
            ことばをたべさせて
            <br />
            たのしいのかんじょうに
            <br />
            そだてよう
          </div>
        );
    }
  })();
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        hideBackdrop={true}
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
          <Stack sx={MonstermodalStyle} spacing={3}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              textAlign={'center'}
              sx={{
                fontSize: '40px',
              }}
            >
              モンスターがあらわれた！
            </Typography>
            <Stack justifyContent="center" spacing={1}>
              <Typography variant="h6" textAlign={'center'} sx={{ mt: 2 }}>
                {labelList}
              </Typography>
            </Stack>
            <Stack justifyContent="center" direction="row">
              <Button
                variant="contained"
                sx={{ color: 'white' }}
                onClick={() => {
                  navigate('/battle');
                }}
              >
                やぎをそだてる
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
};
