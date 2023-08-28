import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC, useRef, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import bgm from '../../Audio/Bgm.mp3';
import { StyleMenu } from '../navbar/StyleMenu';

type Props = {
  handleBattleChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const BattleNavBar: FC<Props> = ({ handleBattleChange }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const [isOpenStyleMenu, setIsOpenStyleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const toggleBGM = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box>
      <audio ref={audioRef} src={bgm} loop />
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: '#D4B178',
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
        <BottomNavigationAction
          label="たたかう"
          icon={<CoronavirusIcon />}
          onClick={handleBattleChange}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction
          id="styleMenuNav"
          label="やぎをみる"
          icon={<SearchIcon />}
          onClick={() => {
            setIsOpenStyleMenu(true);
            setAnchorEl(document.getElementById('styleMenuNav'));
          }}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction
          label="おんがく"
          icon={isPlaying ? <MusicOffIcon /> : <MusicNoteIcon />}
          onClick={toggleBGM}
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
