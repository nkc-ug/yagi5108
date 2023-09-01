import { FC, useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { GetUserData } from './GetUserData';
import { UserDataType } from '../../types/UserDataType';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';
import { Box } from '@mui/material';

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
          backgroundColor: 'rgba(80, 80, 80, 0.5)',
          borderRadius: '30px',
          padding: '15px',
          margin: '0px auto 10px auto',
          width: '350px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: 'rgba(190, 190, 190, 0.6)',
            borderRadius: '20px',
            margin: '0px 0px 20px 0px',
            padding: '10px',
          }}
        >
          ゆーざーでーた
        </Typography>
        <Box
          sx={{
            backgroundColor: 'rgba(190, 190, 190, 0.6)',
            borderRadius: '20px',
            padding: '20px 0px 30px 0px',
          }}
        >
          <div>
            <h3>ゆーざーID</h3>
            <h4>{email}</h4>
          </div>
          <div>
            <h3>ゆーざーねーむ</h3>
            <h4>{userData?.userName}</h4>
          </div>
          <div>
            <h3>ことばをたべさせたかいすう</h3>
            <h4>{userData?.totalEatCount ? String(userData?.totalEatCount) : '0'}かい</h4>
          </div>
          <div>
            <h3>バトルでかったかいすう</h3>
            <h4>{userData?.battleWinCount ? String(userData?.battleWinCount) : '0'}かい</h4>
          </div>
        </Box>
      </Box>
    </div>
  ) : null;
};
