import React, { useEffect, useRef } from 'react';

interface RandomImageProps {
  src: string;
}

const RandomImage: React.FC<RandomImageProps> = ({ src }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      const startAnimation = () => {
        const targetX = Math.random() * (window.innerWidth - image.width);
        const targetY = Math.random() * (window.innerHeight - image.height);
        const startX = image.offsetLeft;
        const startY = image.offsetTop;
        const distanceX = targetX - startX;
        const distanceY = targetY - startY;
        const duration = 1000; // アニメーションの時間（ミリ秒）
        const startTime = performance.now();

        const animate = (timestamp: number) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1); // 0から1の範囲に正規化

          const currentX = startX + distanceX * progress;
          const currentY = startY + distanceY * progress;

          image.style.transform = `translate(${currentX}px, ${currentY}px)`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            startAnimation(); // 次のランダムな位置へのアニメーションを開始
          }
        };

        requestAnimationFrame(animate);
      };

      startAnimation();
    }
  }, []);

  return (
    <img
      ref={imageRef}
      src={"../image/yagi_syokuzi.png"}
      alt="Random Image"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default RandomImage;
