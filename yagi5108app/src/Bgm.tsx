import React, { useRef, useState } from "react";
import { Button } from "@mui/material";

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
      <Button variant="contained" onClick={toggleBGM}>
        {isPlaying ? "Stop" : "Play"}
      </Button>
    </>
  );
};

export default BGMPlayer;
