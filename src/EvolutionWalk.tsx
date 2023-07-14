import React, { useRef, useEffect, useState } from 'react';
import yagi_yorokobi from './assets/yagi_yorokobi.png';
import yagi_ikari from './assets/yagi_iakri.png';
import yagi_kanasimi from './assets/yagi_kanasimi.png';
import yagi_tanosii from './assets/yagi_tanosii.png';
import yagi_yorokobi_right from './assets/yagi_yorokobi_right.png';
import yagi_ikari_right from './assets/yagi_iakri_right.png';
import yagi_kanasimi_right from './assets/yagi_kanasimi_right.png';
import yagi_tanosii_right from './assets/yagi_tanosii_right.png';

type Props = {
  typeId: number;
};

const EvolutionWalk: React.FC<Props> = (props) => {
  const walkerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 65, y: -130 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const getImagePath = (typeId: number) => {
    switch (typeId) {
      case 1:
        return position.x > containerSize.width / 2 ? yagi_yorokobi_right : yagi_yorokobi;
      case 2:
        return position.x > containerSize.width / 2 ? yagi_ikari_right : yagi_ikari;
      case 3:
        return position.x > containerSize.width / 2 ? yagi_kanasimi_right : yagi_kanasimi;
      case 4:
        return position.x > containerSize.width / 2 ? yagi_tanosii_right : yagi_tanosii;
      default:
        return null;
    }
  };

  const backgroundImage = getImagePath(props.typeId);

  useEffect(() => {
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    const updateContainerSize = () => {
      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;
      setContainerSize({ width: containerWidth, height: containerHeight });
    };

    updateContainerSize(); // 初回描画時にコンテナサイズを更新

    const resizeObserver = new ResizeObserver(updateContainerSize);
    resizeObserver.observe(containerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!walkerRef.current) return; // walkerRef.currentがnullの場合、処理を終了

    const startX = containerSize.width / 2 - 150; // 開始位置のx座標
    const startY = containerSize.height / 2 - 150; // 開始位置のy座標
    const endX = containerSize.width / 2 + 150; // 終了位置のx座標
    const endY = containerSize.height / 2 + 150; // 終了位置のy座標

    const updatePosition = () => {
      const newX = startX + Math.random() * (endX - startX);
      const newY = startY + Math.random() * (endY - startY);

      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(updatePosition, 5000); // 移動アニメーションの時間を延長（2000ミリ秒）

    return () => {
      clearInterval(intervalId);
    };
  }, [containerSize]);

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
      />
    </div>
  );
};

export default EvolutionWalk;
