import { useRef, useState } from 'react';
import { Button } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface BGMPlayerProps {
  src: string;
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#e9e4d4',
    },
  },
});

const BGMPlayer: React.FC<BGMPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <>
      <audio ref={audioRef} src={src} loop />
      <ThemeProvider theme={theme}>
        <Button onClick={toggleBGM}>
          <MusicNoteIcon />
        </Button>
      </ThemeProvider>
    </>
  );
};

export default BGMPlayer;
