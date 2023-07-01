import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    right: theme.spacing(2), // Adjust the 'right' value to move the icons horizontally
  },
}));

const actions = [
  { icon: <MusicNoteIcon sx={{ fontSize: 22 }} />, name: 'BGMのON/OFF' },
  { icon: <RotateLeftIcon sx={{ fontSize: 22 }} />, name: 'リセット' }, // Specify the fontSize for the icon
];

export const SettingCon = () => {
  return (
    <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<SettingsIcon sx={{ fontSize: 24 }} />}
        direction="down" // Specify the direction as 'down'
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};
export default SettingCon;
