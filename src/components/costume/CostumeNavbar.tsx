import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';

export const CostumeNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: '#D4B178',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
          py: 1.5,
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
