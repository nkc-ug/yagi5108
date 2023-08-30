import { FC, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { EATLIMIT } from '../../const/eatLimit';
import { modalStyle } from '../../styles/modalStyle';

type Props = {
  eatCount: number;
  monster: number;
  open: boolean;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Battle: FC<Props> = ({ open, monster, closeClick, eatCount }) => {
  const labelList = (() => {
    switch (monster) {
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
            そだてよう;
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
            そだてよう;
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
            そだてよう;
          </div>
        );
    }
  })();

  return (
    <div>
      {eatCount > EATLIMIT ? null : (
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
                モンスターがあらわれた！！
              </Typography>
              <Stack justifyContent="center" spacing={1}>
                <Typography variant="h6" textAlign={'center'}>
                  {labelList}
                </Typography>
              </Stack>
              <Stack justifyContent="center" direction="row">
                <Button variant="contained" sx={{ color: 'white' }} onClick={closeClick}>
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
