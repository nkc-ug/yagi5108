import { createTheme, alpha } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { amber } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const customTheme = createTheme({
  palette: {
    warning: {
      main: alpha(amber[700], 0.5),
    },
    secondary: {
      main: "#f0f0f0",
    },
  },
});

const commonProp = {
  width: 300,
  height: 200,
};

const Form = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        position="absolute"
        zIndex={1}
        sx={{
          ...commonProp,
          backgroundColor: alpha(customTheme.palette.secondary.main, 0.5), // 半透明にする
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          ヤギに食べさせる言葉を
        </Typography>
        <Typography variant="h5" textAlign={"center"}>
          入力してください
        </Typography>
        <Box textAlign={"center"}>
          <TextField
            id="standard-basic"
            label="言葉を入力"
            variant="standard"
          />
        </Box>
        <Box textAlign={"center"}>
          <Button variant="outlined">草を生やす</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Form;
