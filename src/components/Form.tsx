import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleBattleChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isDisableTextField: boolean;
};

const boxStyles = {
  padding: 1,
  margin: 3,
  '& .MuiTextField-root': { m: 2, width: '25ch' },
};

const Form: FC<Props> = (props) => {
  return (
    <div>
      <Box
        zIndex={1}
        sx={{
          ...boxStyles,
        }}
      >
        <Typography
          variant="h5"
          textAlign={'center'}
          sx={{
            opacity: props.isDisableTextField ? 0 : 1,
          }}
        >
          ヤギにたべさせる
        </Typography>
        <Typography variant="h5" textAlign="center">
          {props.isDisableTextField ? 'やぎはお腹いっぱい' : 'ことばをいれてね'}
        </Typography>
        <Box
          textAlign={'center'}
          sx={{
            opacity: props.isDisableTextField ? 0 : 1,
          }}
        >
          <TextField
            id="standard-basic"
            label="ことばを入れてね"
            type="text"
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
          {props.isDisableTextField ? (
            <>
              <Button
                variant="contained"
                sx={{ color: 'white' }}
                onClick={props.handleBattleChange}
              >
                モンスターとたたかう
              </Button>
              <Button
                variant="contained"
                sx={{ color: 'white' }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                ゲームをリスタートする
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{ color: 'white' }}
              onClick={props.inputText.trim() !== '' ? props.handleSubmit : undefined}
              disabled={props.inputText.trim() === ''}
            >
              草をあげる
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Form;
