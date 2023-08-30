import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FC, useRef, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
// import bgm from '../../Audio/Bgm.mp3';
import { StyleMenu } from '../navbar/StyleMenu';

// type Props = {
//   handleSettingsChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
// };

export const SettingsNavBar: FC = () => {
  //   const audioRef = useRef<HTMLAudioElement | null>(null);
  //   const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const [isOpenStyleMenu, setIsOpenStyleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  //   const toggleBGM = () => {
  //     if (audioRef.current) {
  //       if (isPlaying) {
  //         audioRef.current.pause();
  //       } else {
  //         audioRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //     }
  //   };

  return (
    <Box>
      {/* <audio ref={audioRef} src={bgm} loop /> */}
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
