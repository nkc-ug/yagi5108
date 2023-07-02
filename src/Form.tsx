import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const commonProp = {
  padding: 1,
  margin: 3,
};

const Form: FC<Props> = (props) => {
  return (
    <div>
      <Box
        zIndex={1}
        sx={{
          ...commonProp,
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
      >
        <Typography variant="h5" textAlign={'center'}>
          ヤギにたべさせることばを
        </Typography>
        <Typography variant="h5" textAlign={'center'}>
          いれてね
        </Typography>
        <Box textAlign={'center'}>
          <TextField
            id="standard-basic"
            label="ことばを入れてね"
            variant="standard"
            autoCapitalize="off"
            value={props.inputText}
            onChange={props.handleChange}
            inputProps={{
              maxLength: 10,
            }}
          />
        </Box>
        <Box textAlign={'center'}>
          <Button
            variant="contained"
            sx={{ color: 'white' }}
            onClick={props.inputText.trim() !== '' ? props.handleSubmit : undefined}
            disabled={props.inputText.trim() === ''}
          >
            草をあげる
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
