import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { FC, useRef, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import bgm from './Audio/Bgm.mp3';

type Props = {
  handleTutorialChange: () => void;
};

export const NavBar: FC<Props> = ({ handleTutorialChange }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleBGM = () => {
    console.log('toggleBGM');
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
          label="あそびかた"
          icon={<HelpIcon />}
          onClick={handleTutorialChange}
          sx={{ color: 'white' }}
        />
        <BottomNavigationAction label="やぎをみる" icon={<SearchIcon />} sx={{ color: 'white' }} />
        <BottomNavigationAction
          label="おんがく"
          icon={isPlaying ? <MusicOffIcon /> : <MusicNoteIcon />}
          onClick={toggleBGM}
          sx={{ color: 'white' }}
        />
      </BottomNavigation>
    </Box>
  );
};
