import * as React from 'react';
import { FC } from 'react';
import { createTheme, alpha } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const customTheme = createTheme({
  palette: {
    warning: {
      main: alpha(amber[700], 0.5),
    },
    secondary: {
      main: '#f0f0f0',
    },
  },
});

const commonProp = {
  padding: 3,
  margin: 3,
};

const Form: FC<Props> = (props) => {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Box
          zIndex={1}
          sx={{
            ...commonProp,
            backgroundColor: alpha(customTheme.palette.secondary.main, 0.5),
            '& .MuiTextField-root': { m: 2, width: '25ch' },
          }}
        >
          <Typography variant="h5" textAlign={'center'}>
            ヤギに食べさせる言葉を
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            入力してください
          </Typography>
          <Box textAlign={'center'}>
            <TextField
              id="standard-basic"
              label="言葉を入力"
              variant="standard"
              value={props.inputText}
              onChange={props.handleChange}
              inputProps={{
                maxLength: 10,
              }}
            />
          </Box>
          <Box textAlign={'center'}>
            <Button
              variant="outlined"
              onClick={props.inputText.trim() !== '' ? props.handleSubmit : undefined}
              disabled={props.inputText.trim() === ''}
            >
              草を生やす
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Form;
