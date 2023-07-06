import { Box, Button, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PetsIcon from '@mui/icons-material/Pets';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const BottonGroups = () => {
  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 1.5,
  };

  type ButtonListType = {
    icon: JSX.Element;
    text: string;
    onClick: () => void;
  };

  const buttonList: ButtonListType[] = [
    {
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />,
      text: '戦う',
      onClick: () => console.log('戦う'),
    },
    {
      icon: <PetsIcon sx={{ fontSize: 40 }} />,
      text: '散歩',
      onClick: () => console.log('散歩'),
    },
    {
      icon: <DirectionsRunIcon sx={{ fontSize: 40 }} />,
      text: '遊ぶ',
      onClick: () => console.log('遊ぶ'),
    },
 ];

  return (
    <Box sx={buttonStyle}>
      {
        buttonList.map((item) => (
        return(      
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 1.5,
          }}
        >
          {item.icon}
          <Typography>{item.text}</Typography>
        </Button>)
      }




















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
