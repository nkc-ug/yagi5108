import React, { useRef, useEffect, useState } from 'react';
import image1 from '../image/yagi_syokuzi.png';

const RandomWalker: React.FC = () => {
  const walkerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    const startX = containerWidth / 4 - walkerElement.clientWidth / 2; // 開始位置のx座標
    const startY = containerHeight / 4 - walkerElement.clientHeight / 2; // 開始位置のy座標
    const endX = containerWidth * 3 / 4 - walkerElement.clientWidth / 2; // 終了位置のx座標
    const endY = containerHeight * 3 / 4 - walkerElement.clientHeight / 2; // 終了位置のy座標

    const updatePosition = () => {
      const newX = startX + Math.random() * (endX - startX);
      const newY = startY + Math.random() * (endY - startY);

      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(updatePosition, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={walkerRef}
      style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: `url(${image1})`,
        backgroundSize: 'cover',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'left 0.5s, top 0.5s',
      }}
    />
  );
};

export default RandomWalker;
