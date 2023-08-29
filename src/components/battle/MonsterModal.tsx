import { Backdrop, Button, Fade, Stack, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { MonstermodalStyle } from '../../styles/MonstermodalStyle';
import { useNavigate } from 'react-router-dom';
type Props = {
  monsternumber: number;
  open: boolean;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const MonsterModal: FC<Props> = ({ open, closeClick, monsternumber }) => {
  const labelList = (() => {
    switch (monsternumber) {
      case 1:
        return (
          <div>
            このモンスターは
            <br />
            よろこびのかんじょうに
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
      case 2:
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
            やぎをいかりのかんじょうに
            <br />
            そだてよう
          </div>
        );
      case 3:
        return (
          <div>
            このモンスターは
            <br />
            かなしいかんじょうに
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
      case 4:
        return (
          <div>
            このモンスターは
            <br />
            たのしいのかんじょうに
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
