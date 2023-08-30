import { useRef, useEffect, useState, FC, useContext } from 'react';
import yagi_efect from '../Audio/やぎの鳴き声.mp3';
import { Box, Button } from '@mui/material';
import { GoatClothesContext, GoatContext } from '../provider/ContextProviders';
import { convertGoat } from '../util/convertGoat';
import { convertCostume } from '../util/convertCostume';

type Props = {
  containerSize: {
    width: number;
    height: number;
  };
};

const NormalWalk: FC<Props> = ({ containerSize }) => {
  // ヤギの姿を保持するcontext
  const [goatUrl] = useContext(GoatContext);
  const [clothesUrl] = useContext(GoatClothesContext);

  const walkerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    x: containerSize.width / 3,
    y: (containerSize.height / 10) * 5,
  });
  useEffect(() => {
    const minX = -50; // 開始位置のx座標
    const minY = (containerSize.height / 10) * 4; // 開始位置のy座標
    const maxX = (containerSize.width / 10) * 5; // 終了位置のx座標
    const maxY = (containerSize.height / 10) * 6; // 終了位置のy座標

    const updatePosition = () => {
      const newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
      const newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(updatePosition, 5000); // 移動アニメーションの時間を延長（2000ミリ秒）

    return () => {
      clearInterval(intervalId);
    };
  }, [containerSize]);

  const backgroundImage = convertGoat({
    goatImgUrl: goatUrl,
    isRight: position.x > containerSize.width / 3,
  });
  const costumeImage = convertCostume({
    costumeImgUrl: clothesUrl,
    isRight: position.x > containerSize.width / 3,
  });
  const [play, isPlaying] = useState(true);
  const yagiAudio = () => {
    isPlaying(!play);
    new Audio(yagi_efect).play();
  };
  const audioPlay = () => {
    yagiAudio();
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Button variant="text" onClick={audioPlay}>
        <div
          ref={walkerRef}
          style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transition: 'left 3s ease-in-out, top 3s ease-in-out', // 移動アニメーションの時間を延長（3秒）
          }}
        >
          <Box //衣装用のbox
            sx={{
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundImage: `url(${costumeImage})`,
            }}
          />
        </div>
      </Button>
    </div>
  );
};

export default NormalWalk;
