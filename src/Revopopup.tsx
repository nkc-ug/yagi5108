import { FC } from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import yagi_blck from './assets/black_yagi.png';

type Props = {
  eatCount: number;
  pop: boolean;
};

const Revopopup: FC<Props> = (props) => {
  return (
    <div>
      {props.pop ? (
        <div>
          {props.eatCount >= 5 ? (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                boxShadow: 24,
                backgroundPosition: '-50px -300px',
                zIndex: 1,
                borderRadius: '10px',
              }}
            >
              <Stack sx={{ p: 5, borderRadius: '10px', bgcolor: 'white' }} spacing={3}>
                <Stack justifyContent="center" direction="row">
                  <img src={yagi_blck} style={{ width: '150px' }} />
                </Stack>
                <Stack spacing={1} textAlign="center">
                  <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    おやおや..?
                    <br />
                    ヤギのようすが....
                  </Typography>
                </Stack>
                <Button
                  size="large"
                  variant="contained"
                  // onClick={props.popSubmit}
                  sx={{ mx: 2, color: 'white' }}
                >
                  ヤギをみまもる
                </Button>
              </Stack>
            </Box>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
export default Revopopup;
