import { useContext } from 'react';
import { Box } from '@mui/material';
import { IsLoginContext } from '../../provider/ContextProviders';
import { LoginButton } from '../auth/LoginButton';

export const RequestLogin = () => {
  const [isLogin] = useContext(IsLoginContext);
  return isLogin ? null : (
    <div>
      <Box sx={{ color: 'rgba(225, 225, 225, 1)' }}>
        <h2>ログインがひつようです</h2>
        <h4>
          トロフィーきのうをつかうにはログインがひつようです。
          <br />
          おてすうですがログインしていただくようにおねがいいたします。
        </h4>
      </Box>
      <LoginButton />
    </div>
  );
};
