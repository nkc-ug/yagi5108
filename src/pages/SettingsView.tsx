import { Slider, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import React from 'react';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export const SettingsView = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Container
        maxWidth="sm"
        sx={{
          padding: '50px',
          marginTop: '50%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">おんりょう</Typography>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDownIcon />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUpIcon />
        </Stack>{' '}
      </Container>
    </Stack>
  );
};
