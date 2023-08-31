import { FC } from 'react';
import { Box } from '@mui/material';

type Props = {
  CostumeImage: string;
};

export const CostumeBox: FC<Props> = ({ CostumeImage }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${CostumeImage})`,
        width: '90px',
        height: '90px',
        backgroundSize: 'cover',
      }}
    />
  );
};
