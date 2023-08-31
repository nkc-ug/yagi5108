import { FC, useContext, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { modalStyle } from '../../styles/modalStyle';
import { EmailContext } from '../../provider/ContextProviders';
import { GetUserData } from './GetUserData';
import { UserDataType } from '../../types/UserDataType';

type Props = {
  open: boolean;
  closeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const UserDataModal: FC<Props> = ({ open, closeClick }) => {
  const [email] = useContext(EmailContext);
  const [userData, setUserData] = useState<UserDataType>();
  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {
      const response = await GetUserData(email);
      setUserData(response);
    };
    access_db();
  }, []);
  const labelList = new Map([
    [0, 'ゆーざーID'],
    [1, email],
    [2, 'ゆーざーねーむ'],
    [3, userData?.userName],
    [4, 'ことばをたべたかいすう'],
    [5, `${String(userData?.totalEatCount)}かい`],
  ]);

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
              sx={{
                variant: 'h5',
                textAlign: 'center',
                fontSize: '30px',
              }}
            >
              ゆーざーでーた
            </Typography>
            <Stack justifyContent="center" spacing={1}>
              {[...labelList].map(([key]) => (
                <Typography key={key} sx={{ mt: 2, variant: 'h6', textAlign: 'center' }}>
                  {labelList.get(key)}
                </Typography>
              ))}
            </Stack>
            <Stack justifyContent="center" direction="row">
              <Button variant="contained" sx={{ color: 'white' }} onClick={closeClick}>
                とじる
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
};
