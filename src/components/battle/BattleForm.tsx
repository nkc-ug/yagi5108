import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
const boxStyles = {
  padding: 1,
  margin: 3,
  '& .MuiTextField-root': { m: 2, width: '25ch' },
};

type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleResultChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisableTextField: boolean;
};

export const BattleForm: FC<Props> = ({
  inputText,
  handleChange,
  handleSubmit,
  handleResultChange,
  isDisableTextField,
}) => {
  //const navigate = useNavigate();
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
            color: 'white',
            opacity: isDisableTextField ? 0 : 1,
          }}
        >
          ヤギにたべさせる
        </Typography>
        <Typography variant="h5" textAlign="center" color="white">
          {isDisableTextField ? 'やぎはお腹いっぱい' : 'ことばをいれてね'}
        </Typography>
        <Box
          textAlign={'center'}
          sx={{
            opacity: isDisableTextField ? 0 : 1,
          }}
        >
          <TextField
            id="standard-basic"
            label="ことばを入れてね"
            type="text"
            variant="standard"
            autoCapitalize="off"
            value={inputText}
            onChange={handleChange}
            inputProps={{
              maxLength: 10,
              style: { color: 'white' },
            }}
          />
        </Box>
        <Box textAlign={'center'}>
          {isDisableTextField ? (
            <Stack spacing={3} sx={{ mx: 8 }}>
              <Button variant="contained" sx={{ color: 'white' }} onClick={handleResultChange}>
                モンスターとたたかう
              </Button>
            </Stack>
          ) : (
            <Button
              variant="contained"
              sx={{ color: 'white' }}
              onClick={inputText.trim() !== '' ? handleSubmit : undefined}
              disabled={inputText.trim() === ''}
            >
              草をあげる
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};
