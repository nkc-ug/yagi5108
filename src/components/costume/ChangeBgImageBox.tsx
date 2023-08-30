import { useContext } from 'react';
import { Button, Grid } from '@mui/material';
import { BgImageBox } from './BgImageBox';
import night from '../../assets/night.png';
import noon from '../../assets/noon.png';
import sougen from '../../assets/sougen.png';
import umi from '../../assets/umi.png';
import mori from '../../assets/mori.png';
import { BackgroundContext } from '../../provider/ContextProviders';

export const ChangeBgImageBox = () => {
  const [BackgroundUrl, setBackgroundUrl] = useContext(BackgroundContext);
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      sx={{ alignItems: 'center', alignContent: 'center', wrap: 'wrap', height: '100%' }}
    >
      <Grid item xs={6}>
        <Button
          onClick={() => {
            setBackgroundUrl({ ...BackgroundUrl, groundUrl: 'sougen' });
          }}
        >
          <BgImageBox BgImageUrl={sougen} />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            setBackgroundUrl({ ...BackgroundUrl, skyUrl: 'noon' });
          }}
        >
          <BgImageBox BgImageUrl={noon} />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            setBackgroundUrl({ ...BackgroundUrl, groundUrl: 'umi' });
          }}
        >
          <BgImageBox BgImageUrl={umi} />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            setBackgroundUrl({ ...BackgroundUrl, skyUrl: 'night' });
          }}
        >
          <BgImageBox BgImageUrl={night} />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            setBackgroundUrl({ ...BackgroundUrl, groundUrl: 'mori' });
          }}
        >
          <BgImageBox BgImageUrl={mori} />
        </Button>
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
};
