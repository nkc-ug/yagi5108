import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { BackgroundContext } from '../../provider/ContextProviders';
import { textfieldStyle } from '../../styles/textFieldStyle';
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
  const [backgroundUrl] = useContext(BackgroundContext);
  const isNight = backgroundUrl.skyUrl === 'night';
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
            color: isNight ? 'white' : 'black',
            opacity: isDisableTextField ? 0 : 1,
          }}
        >
          ヤギにたべさせる
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: isNight ? 'white' : 'black',
            textAlign: 'center',
          }}
        >
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
            sx={
              isNight
                ? {
                    ...textfieldStyle,
                  }
                : {}
            }
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
              sx={{
                color: isNight ? 'white' : 'black',
              }}
              onClick={inputText.trim() !== '' ? handleSubmit : undefined}
              disabled={inputText.trim() === ''}
            >
              <Typography
                variant="button"
                sx={{
                  color: isNight ? 'white' : 'black',
                }}
              >
                草をあげる
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};
