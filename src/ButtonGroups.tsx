import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, alpha, ThemeProvider } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PetsIcon from "@mui/icons-material/Pets";
import BedtimeIcon from "@mui/icons-material/Bedtime";

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

const BottonGroups = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: alpha(customTheme.palette.secondary.main, 0.5),
          padding: 1,
        }}
      >
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 1.5,
          }}
        >
          <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />
          <span>戦う</span>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 1.5,
          }}
        >
          <PetsIcon sx={{ fontSize: 40 }} />
          <span>散歩</span>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 1.5,
          }}
        >
          <DirectionsRunIcon sx={{ fontSize: 40 }} />
          <span>遊ぶ</span>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 1.5,
          }}
        >
          <BedtimeIcon sx={{ fontSize: 40 }} />
          <span>寝る</span>
        </Button>
      </Box>
    </ThemeProvider>
  );
};
export default BottonGroups;
