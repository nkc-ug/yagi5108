import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC, useRef, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import bgm from '../../Audio/Bgm.mp3';
import { VerticalDivider } from '../common/VerticalDivider';

type Props = {
  handleMonsterModalChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const BattleNavBar: FC<Props> = ({ handleMonsterModalChange }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  return (
    <Box>
      <audio ref={audioRef} src={bgm} loop />
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: '#D4B178',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
          py: 1.5,
        }}
      >
        <BottomNavigationAction
          label="たたかいをやめる"
          icon={<ReplyIcon />}
          onClick={() => {
            navigate('/');
          }}
          sx={{ color: 'white' }}
        />
        <VerticalDivider />
        <BottomNavigationAction
          label="モンスターをみる"
          icon={<CoronavirusIcon />}
          onClick={() => {
            navigate('/MonsterView');
          }}
          sx={{ color: 'white' }}
        />
      </BottomNavigation>
    </Box>
  );
};
