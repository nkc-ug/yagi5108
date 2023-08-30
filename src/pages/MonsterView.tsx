import { FC, useContext, useEffect, useState } from 'react';
import { Container, Stack, Grid, Box } from '@mui/material';
import night from '../assets/night.png';
import sougen from '../assets/sougen.png';
import { MonsterContext } from '../provider/ContextProviders';
import { convertMonster } from '../util/convertMonster';
import { MonsterModal } from '../components/battle/MonsterModal';
import { useDiscloser } from '../hooks/useDiscloser';

export const MonsterView: FC = () => {
  const [monsterUrl] = useContext(MonsterContext);
  const [isMonsterModalOpen, __, handleMonsterModalClose] = useDiscloser(true);
  const monsterImg = convertMonster({ monsterImgUrl: monsterUrl });

  return (
    <div>
      <Stack direction="row" justifyContent="center">
        <Container
          disableGutters
          maxWidth="sm"
          style={{
            backgroundImage: `url(${night})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '70vh',
            width: '100%',
            objectFit: 'cover',
          }}
        >
          <Container
            disableGutters
            style={{
              backgroundImage: `url(${monsterImg})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
              height: '60vh',
              width: '100%',
            }}
          >
            <Box sx={{ height: '25vh' }} />

            <Container disableGutters maxWidth="sm" sx={{ mt: 10 }}>
              <Box sx={{ height: '80vh' }}>
                <Container
                  disableGutters
                  style={{
                    backgroundImage: `url(${sougen})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    height: '60vh',
                    width: '100%',
                  }}
                >
                  <Grid container sx={{ textAlign: 'center' }}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                      <MonsterModal
                        monsternumber={monsterUrl}
                        open={isMonsterModalOpen}
                        closeClick={handleMonsterModalClose}
                      />
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </Container>
              </Box>
            </Container>
          </Container>
        </Container>
      </Stack>
    </div>
  );
};
