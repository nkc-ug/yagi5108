import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

export const CostumeNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: '#D4B178',
        }}
      >
        <BottomNavigationAction
          label="もどる"
          icon={<ReplyIcon />}
          onClick={() => {
            navigate('/');
          }}
          sx={{ color: 'white' }}
        />
      </BottomNavigation>
    </Box>
  );
};
