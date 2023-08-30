import { Grid } from '@mui/material';
import { BgImageBox } from './BgImageBox';
import night from '../../assets/night.png';
import noon from '../../assets/noon.png';
import sougen from '../../assets/sougen.png';
import umi from '../../assets/umi.png';
import mori from '../../assets/mori.png';

export const ChangeBgImageBox = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      sx={{ alignItems: 'center', alignContent: 'center', wrap: 'wrap', height: '100%' }}
    >
      <Grid item xs={6}>
        <BgImageBox BgImageUrl={sougen} />
      </Grid>
      <Grid item xs={6}>
        <BgImageBox BgImageUrl={noon} />
      </Grid>
      <Grid item xs={6}>
        <BgImageBox BgImageUrl={umi} />
      </Grid>
      <Grid item xs={6}>
        <BgImageBox BgImageUrl={night} />
      </Grid>
      <Grid item xs={6}>
        <BgImageBox BgImageUrl={mori} />
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
};
