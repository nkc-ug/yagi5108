import { FC } from 'react';
import { Box } from '@mui/material';

type Props = {
  BgImageUrl: string;
};

export const BgImageBox: FC<Props> = ({ BgImageUrl }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#a0a0a0',
        backgroundImage: `url(${BgImageUrl})`,
        width: '200px',
        height: '200px',
        backgroundSize: 'cover',
      }}
    />
  );
};
