import { BottomNavigation, BottomNavigationAction, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC, useContext, useRef, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  MonsterContext,
  MonsterNumberContext,
  TutorialContext,
} from '../../provider/ContextProviders';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { VerticalDivider } from '../common/VerticalDivider';

type Props = {
  handleTutorialChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const NavBar: FC<Props> = ({ handleTutorialChange }) => {
  const navigate = useNavigate();
  const [_, setMonsterUrl] = useContext(MonsterContext);
  const [__, setMonsterNumber] = useContext(MonsterNumberContext);
  const [___, setIsTutorialModal] = useContext(TutorialContext);

  const handleMonster = () => {
    const monsternumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    const monsterstring = (() => {
      switch (monsternumber) {
        case 1:
          return 'monster_yorokobi';
        case 2:
          return 'monster_ikari';
        case 3:
          return 'monster_kanasii';
        case 4:
          return 'monster_tanosii';
        default:
          return '';
      }
    })();
    setMonsterUrl(monsterstring);
    setMonsterNumber(monsternumber);
    navigate('/MonsterView');
  };

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
        {/* <BottomNavigationAction
          label="あそびかた"
          icon={<HelpIcon />}
          onClick={() => {
            setIsTutorialModal(true);
          }}
          sx={{ color: 'white' }}
        /> */}
        <BottomNavigationAction
          label="たたかう"
          icon={<LocalFireDepartmentIcon />}
          onClick={() => {
            handleMonster();
          }}
          sx={{ color: 'white' }}
        />
        <VerticalDivider />
        <BottomNavigationAction
          id="styleMenuNav"
          label="やぎをみる"
          icon={<SearchIcon />}
          onClick={() => {
            navigate('/CostumePage');
          }}
          sx={{ color: 'white' }}
        />
        <VerticalDivider />
        <BottomNavigationAction
          label="トロフィー"
          icon={<EmojiEventsIcon />}
          onClick={() => {
            navigate('/TrophyPage');
          }}
          sx={{ color: 'white' }}
        />
        <VerticalDivider />
        <BottomNavigationAction
          label="せってい"
          icon={<SettingsIcon />}
          onClick={() => {
            navigate('SettingsView');
          }}
          sx={{ color: 'white' }}
        />
      </BottomNavigation>
    </Box>
  );
};
