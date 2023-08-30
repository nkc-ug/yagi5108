import { useContext } from 'react';
import { Button, Grid } from '@mui/material';
import costume_kigurumi_left from '../../assets/costume_kigurumi_left.png';
import costume_kimono_left from '../../assets/costume_kimono_left.png';
import costume_maid_left from '../../assets/costume_maid_left.png';
import costume_mizugi_left from '../../assets/costume_mizugi_left.png';
import costume_nurse_left from '../../assets/costume_nurse_left.png';
import costume_police_left from '../../assets/costume_police_left.png';
import costume_serahuku_left from '../../assets/costume_serahuku_left.png';
import costume_seta_left from '../../assets/costume_seta_left.png';
import costume_yubin_left from '../../assets/costume_yubin_left.png';
import yagi_left from '../../assets/yagi.png';
import { CostumeBox } from './CostumeBox';
import { GoatClothesContext } from '../../provider/ContextProviders';

export const ChangeCostumeBox = () => {
  const [_, setClothesUrl] = useContext(GoatClothesContext);
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      sx={{ alignItems: 'center', alignContent: 'center', wrap: 'wrap', height: '100%' }}
    >
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('yagi');
          }}
        >
          <CostumeBox CostumeImage={yagi_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('kigurumi');
          }}
        >
          <CostumeBox CostumeImage={costume_kigurumi_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('kimono');
          }}
        >
          <CostumeBox CostumeImage={costume_kimono_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('maid');
          }}
        >
          <CostumeBox CostumeImage={costume_maid_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('mizugi');
          }}
        >
          <CostumeBox CostumeImage={costume_mizugi_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('nurse');
          }}
        >
          <CostumeBox CostumeImage={costume_nurse_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('police');
          }}
        >
          <CostumeBox CostumeImage={costume_police_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('serahuku');
          }}
        >
          <CostumeBox CostumeImage={costume_serahuku_left} />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('seta');
          }}
        >
          <CostumeBox CostumeImage={costume_seta_left} />
        </Button>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setClothesUrl('yubin');
          }}
        >
          <CostumeBox CostumeImage={costume_yubin_left} />
        </Button>
      </Grid>

      <Grid item xs={4} />
    </Grid>
  );
};
