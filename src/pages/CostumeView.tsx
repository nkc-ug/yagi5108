import { Container, Stack, Grid, Box, Typography } from '@mui/material';

export const CostumeView = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Container
        maxWidth="sm"
        sx={{
          height: '100vh',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            width: '100%',
          }}
        >
          <Typography variant="h4">いまのヤギ</Typography>
          <Typography variant="h5">mitei</Typography>
        </Container>
        <Container
          maxWidth="xs"
          sx={{
            width: '250px',
            height: '250px',
            backgroundSize: 'cover',
            padding: '0',
          }}
        >
          <Container
            maxWidth="xs"
            sx={{
              width: '250px',
              height: '250px',
              backgroundSize: 'cover',
              padding: '0',
            }}
          />
        </Container>
      </Container>
    </Stack>
  );
};
