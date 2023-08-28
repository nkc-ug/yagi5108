import { useRef, useEffect, useState, FC } from 'react';
import yagi_yorokobi from '../assets/yagi_yorokobi.png';
import yagi_ikari from '../assets/yagi_iakri.png';
import yagi_kanasimi from '../assets/yagi_kanasimi.png';
import yagi_tanosii from '../assets/yagi_tanosii.png';
import yagi_yorokobi_right from '../assets/yagi_yorokobi_right.png';
import yagi_ikari_right from '../assets/yagi_iakri_right.png';
import yagi_kanasimi_right from '../assets/yagi_kanasimi_right.png';
import yagi_tanosii_right from '../assets/yagi_tanosii_right.png';
import yagi_efect from '../Audio/やぎの鳴き声.mp3';

type Props = {
  typeId: number;
  containerSize: {
    width: number;
    height: number;
  };
};

const EvolutionWalk: FC<Props> = ({ typeId, containerSize }) => {
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

  const [play, isPlaying] = useState(true);
  const yagiAudio = () => {
    isPlaying(!play);
    new Audio(yagi_efect).play();
  };
  const audioPlay = () => {
    yagiAudio();
  };
  
  const getImagePath = (typeId: number) => {
    switch (typeId) {
      case 1:
        return position.x > containerSize.width / 3 ? yagi_yorokobi_right : yagi_yorokobi;
      case 2:
        return position.x > containerSize.width / 3 ? yagi_ikari_right : yagi_ikari;
      case 3:
        return position.x > containerSize.width / 3 ? yagi_kanasimi_right : yagi_kanasimi;
      case 4:
        return position.x > containerSize.width / 3 ? yagi_tanosii_right : yagi_tanosii;
      default:
        return null;
    }
  };

  const backgroundImage = getImagePath(typeId);
  
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
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
          transition: 'left 3s ease-in-out, top 3s ease-in-out', // 移動アニメーションの時間を延長（2秒）
        }}
        onClick={audioPlay}
      />
    </div>
  );
};

export default EvolutionWalk;
