import { useContext, useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';

import { TrophyType } from '../../types/UserDataType';
import { GetUserData } from '../auth/GetUserData';
import { UserDataType } from '../../types/UserDataType';

export const TrophyList = () => {
  const [isLogin] = useContext(IsLoginContext);
  const [email] = useContext(EmailContext);
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {
      const response = await GetUserData(email);
      setUserData(response);
    };
    isLogin ? access_db() : null;
  }, [isLogin]);

  return isLogin ? (
    <div>
      <Box sx={{ color: 'rgba(225, 225, 225, 1)', marginTop: '30px' }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper sx={{ backgroundColor: 'rgba(128, 128, 128, 0.75)', height: '150px' }}>
                <Typography sx={{ fontSize: '24px' }}>
                  {userData?.trophy.eatCount5 ? 'おなかいっぱいメェ～' : '？？？'}
                </Typography>
                <Typography fontWeight="bold">かくとくほうほう</Typography>
                <Typography>ヤギにことばを５かいたべさせる</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ backgroundColor: 'rgba(128, 128, 128, 0.75)', height: '150px' }}>
                <Typography sx={{ fontSize: '24px' }}>
                  {userData?.trophy.eatCount5 ? 'もうたべれないメェー！！！' : '？？？'}
                </Typography>
                <Typography fontWeight="bold">かくとくほうほう</Typography>
                <Typography>ヤギにことばを１０かいたべさせる</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  ) : null;
};
