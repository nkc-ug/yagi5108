import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC, useRef, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { StyleMenu } from './StyleMenu';

type Props = {
  handleTutorialChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const NavBar: FC<Props> = ({ handleTutorialChange }) => {
  const navigate = useNavigate();

  const [isOpenStyleMenu, setIsOpenStyleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: '#D4B178',
        }}
      >
        <BottomNavigationAction
          label="あそびかた"
          icon={<HelpIcon />}
          onClick={handleTutorialChange}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction
          label="たたかう"
          icon={<CoronavirusIcon />}
          onClick={() => {
            navigate('/battle');
          }}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction
          id="styleMenuNav"
          label="やぎをみる"
          icon={<SearchIcon />}
          onClick={() => {
            navigate('/CostumePage');
          }}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction
          label="せってい"
          icon={<SettingsIcon />}
          onClick={
            () => {
              navigate('SettingsView');
            }
            // toggleBGM
          }
          sx={{ color: 'white' }}
        />
      </BottomNavigation>

      <StyleMenu
        anchorEl={anchorEl}
        open={isOpenStyleMenu}
        handleClose={() => {
          setIsOpenStyleMenu(false);
        }}
      />
    </Box>
  );
};
