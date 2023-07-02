import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface BGMPlayerProps {
  src: string;
}

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
      <IconButton onClick={toggleBGM}>
        <MusicNoteIcon fontSize="large" color="primary" />
      </IconButton>
    </>
  );
};

export default BGMPlayer;
