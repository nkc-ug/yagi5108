import { Box, Button, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PetsIcon from '@mui/icons-material/Pets';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const BottonGroups = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
    >
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1.5,
        }}
      >
        <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />
        <Typography>戦う</Typography>
      </Button>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1.5,
        }}
      >
        <PetsIcon sx={{ fontSize: 40 }} />
        <Typography>散歩</Typography>
      </Button>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1.5,
        }}
      >
        <DirectionsRunIcon sx={{ fontSize: 40 }} />
        <Typography>遊ぶ</Typography>
      </Button>
      <Button
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1.5,
        }}
      >
        <BedtimeIcon sx={{ fontSize: 40 }} />
        <Typography>寝る</Typography>
      </Button>
    </Box>
  );
};
export default BottonGroups;
