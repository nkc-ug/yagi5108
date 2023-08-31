import { useContext, useState } from 'react';
import { Container, Stack, Grid, Box, Tabs, Tab } from '@mui/material';
import { ChangeCostumeBox } from '../components/costume/ChangeCostumeBox';
import { ChangeBgImageBox } from '../components/costume/ChangeBgImageBox';
import { CostumeHeader } from '../components/costume/CostumeHeader';
import { convertCostume } from '../util/convertCostume';
import { GoatClothesContext } from '../provider/ContextProviders';
import { GoatContext } from '../provider/ContextProviders';
import { convertGoat } from '../util/convertGoat';
import { BackgroundContext } from '../provider/ContextProviders';
import { convertBackGroundImg } from '../util/convertBackGroundImg';

export const CostumePage = () => {
  const [value, setValue] = useState('1');
  const [clothesUrl] = useContext(GoatClothesContext);
  const [goatUrl] = useContext(GoatContext);
  const [backgroundUrl] = useContext(BackgroundContext);

  const handleCostumeTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const costumeImage = convertCostume({
    costumeImgUrl: clothesUrl,
    isRight: false,
  });
  const goatImage = convertGoat({
    goatImgUrl: goatUrl,
    isRight: false,
  });
  const backGround = convertBackGroundImg({
    skyUrl: backgroundUrl.skyUrl,
    groundUrl: backgroundUrl.groundUrl,
  });
  return (
    <Stack direction="row" justifyContent="center" sx={{ bgcolor: 'white' }}>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: '100vh',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          bgcolor: '#a9ceec',
          backgroundImage: `url(${backGround.groundUrl}), url(${backGround.skyUrl})`,
          backgroundPosition: 'center bottom, center top',
          backgroundSize: '100%, auto,100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <CostumeHeader />
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ alignItems: 'center', alignContent: 'center', wrap: 'wrap', marginTop: '10px' }}
        >
          <Box //やぎ用のbox
            sx={{
              width: '350px',
              height: '350px',
              backgroundSize: 'cover',
              padding: '0',
              backgroundImage: `url(${goatImage})`,
            }}
          >
            <Box //衣装用のbox
              sx={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: `url(${costumeImage})`,
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="flex-start"
          sx={{
            alignItems: 'flex-start',
            alignContent: 'stretch',
            wrap: 'wrap',
            backgroundColor: 'rgba(197, 232, 230,0.5)',
          }}
        >
          <Container sx={{ width: '100%', marginTop: '10px' }}>
            <Tabs
              value={value}
              onChange={handleCostumeTabChange}
              aria-label="CostumeTabExample"
              centered
            >
              <Tab
                label="いしょう"
                value="1"
                sx={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <Tab
                label="はいけい"
                value="2"
                sx={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Tabs>
          </Container>
          <div role="tabpanel" hidden={value !== '1'}>
            <ChangeCostumeBox />
          </div>
          <div role="tabpanel" hidden={value !== '2'}>
            <ChangeBgImageBox />
          </div>
        </Grid>
      </Container>
    </Stack>
  );
};
