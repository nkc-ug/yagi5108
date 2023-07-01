import { useState, useEffect } from 'react';
import { FC } from 'react';
import Box from '@mui/material/Box';
import { emotionDataType } from './Revolution';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

type Props = {
  emotionData: emotionDataType;
  pop: boolean;
  popSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
const Popup: FC<Props> = (props) => {
  const emoId = props.emotionData.emoId;

  return (
    <div>
      {props.pop ? null : emoId == 0 ? (
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            color: '#000',
            border: '2px solid #FFF',
            boxShadow: 24,
            p: 4,
            backgroundColor: 'blue',
            zIndex: 1,
          }}
        >
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, fontSize: '25px' }}
            textAlign={'center'}
          >
            草生成中！
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            color: '#000',
            border: '2px solid #FFF',
            boxShadow: 24,
            p: 4,
            backgroundColor: 'red',
            zIndex: 1,
          }}
        >
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, fontSize: '25px' }}
            textAlign={'center'}
          >
            草生成完了！
          </Typography>
          <Button variant="contained" onClick={props.popSubmit}>
            食べさせる！
          </Button>
        </Box>
      )}
    </div>
  );
};
export default Popup;
