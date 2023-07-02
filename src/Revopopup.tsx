import { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
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
                height: '300px',
                color: '#000',
                border: '2px solid #FFF',
                boxShadow: 24,
                p: 4,
                //backgroundImage: `url(${yagi_blck})`,

                backgroundColor: 'brack',
                zIndex: 1,
              }}
            >
              <img src={yagi_blck} style={{ width:'150px' }}/>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, fontSize: '25px' }}
                textAlign={'center'}
              >
                おやおや。。ヤギの様子が....
              </Typography>
              <Button variant="contained" /*onClick={props.popSubmit}*/>見てみる</Button>
            </Box>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
export default Revopopup;
