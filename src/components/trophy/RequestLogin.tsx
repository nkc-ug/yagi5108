import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { IsLoginContext } from '../../provider/ContextProviders';
import { LoginButton } from '../auth/LoginButton';

export const RequestLogin = () => {
  const [isLogin] = useContext(IsLoginContext);
  return isLogin ? null : (
    <div>
      <Box sx={{ color: 'rgba(225, 225, 225, 1)', py: 3 }}>
        <Typography variant="h5">ログインがひつようです</Typography>
        <h4>トロフィーきのうをつかうには ログインがひつようです</h4>
      </Box>
      <LoginButton />
    </div>
  );
};
