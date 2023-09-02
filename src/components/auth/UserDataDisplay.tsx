import { FC, useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { GetUserData } from './GetUserData';
import { UserDataType } from '../../types/UserDataType';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';
import { Box, Stack } from '@mui/material';

export const UserDataDisplay: FC = () => {
  const [isLogin] = useContext(IsLoginContext);
  const [email] = useContext(EmailContext);
  const [userData, setUserData] = useState<UserDataType>();
  const [newUserName, setNewUserName] = useState();

  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {
      const response = await GetUserData(email);
      setUserData(response);
    };
    access_db();
  }, [isLogin]);

  return isLogin ? (
    <div>
      <Box
        sx={{
          mx: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >
          ゆーざーでーた
        </Typography>
        <Stack
          spacing={3}
          sx={{
            my: 3,
          }}
        >
          <Box>
            <Typography variant="h6">ゆーざーID</Typography>
            <Typography variant="h6">{email}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">ゆーざーねーむ</Typography>
            <Typography variant="h6">{userData?.userName ?? 'ユーザネームがありません'}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">ことばをたべさせたかいすう</Typography>
            <Typography variant="h6">
              {userData?.totalEatCount ? String(userData?.totalEatCount) : '0'}かい
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">バトルでかったかいすう</Typography>
            <Typography variant="h6">
              {userData?.battleWinCount ? String(userData?.battleWinCount) : '0'}かい
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  ) : null;
};
