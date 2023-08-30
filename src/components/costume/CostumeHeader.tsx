import { Grid, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const CostumeHeader = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      maxWidth="sm"
      sx={{
        width: '100%',
        bgcolor: 'white',
      }}
    >
      <Grid item xs={2}>
        <IconButton
          aria-label="ArrowBackIcon"
          onClick={() => {
            navigate('/');
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4">いまのヤギ</Typography>
        <Typography variant="h5">mitei</Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
