import { FC } from 'react';
import { Box } from '@mui/material';

type Props = {
  CostumeImage: string;
};

export const CostumeBox: FC<Props> = ({ CostumeImage }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#a0a0a0',
        backgroundImage: `url(${CostumeImage})`,
        width: '130px',
        height: '130px',
        backgroundSize: 'cover',
      }}
    />
  );
};
