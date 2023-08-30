import { useState } from 'react';
import { Container, Stack, Grid, Box, Typography, AppBar, Tabs, Tab } from '@mui/material';
import { ChangeCostumeBox } from '../components/costume/ChangeCostumeBox';
import { ChangeBgImageBox } from '../components/costume/ChangeBgImageBox';
import { CostumeHeader } from '../components/costume/CostumeHeader';

export const CostumePage = () => {
  const [value, setValue] = useState('1');

  const handleCostumeTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Stack direction="row" justifyContent="center" bgcolor={'black'}>
      <Container
        maxWidth="sm"
        sx={{
          height: '100%',
          width: '100%',
          textAlign: 'center',
          bgcolor: '#a9ceec',
        }}
      >
        <CostumeHeader />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          marginTop={'10px'}
        >
          <Box //やぎ用のbox
            sx={{
              width: '250px',
              height: '250px',
              backgroundSize: 'cover',
              padding: '0',
              bgcolor: 'red',
            }}
          >
            <Box //衣装用のbox
              sx={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                bgcolor: 'blue',
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="wrap"
        >
          <Container sx={{ width: '100%', marginTop: '10px' }}>
            <Tabs
              value={value}
              onChange={handleCostumeTabChange}
              aria-label="CostumeTabExample"
              centered
            >
              <Tab label="いしょう" value="1" />
              <Tab label="はいけい" value="2" />
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
