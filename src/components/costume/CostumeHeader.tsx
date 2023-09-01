import { Grid, Typography, Button, IconButton } from '@mui/material';

export const CostumeHeader = () => {
  return (
    <Grid
      container
      spacing={0}
      maxWidth="sm"
      sx={{
        width: '100%',
        bgcolor: 'white',
        padding: '10px',
      }}
    >
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography variant="h4">いまのヤギ</Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
