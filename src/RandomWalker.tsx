import React, { useRef, useEffect, useState } from "react";
import yagi_left from "../image/yagi_left.png";
import yagi_right from "../image/yagi_right.png";

const RandomWalker: React.FC = () => {
  const walkerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 300, y: 200 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [rangeVisible, setRangeVisible] = useState(false);

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

    const intervalId = setInterval(updatePosition, 3500); // 移動アニメーションの時間を延長（2000ミリ秒）

    return () => {
      clearInterval(intervalId);
    };
  }, [containerSize]);

  const backgroundImage =
    position.x > containerSize.width / 2 ? yagi_right : yagi_left;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {rangeVisible && (
        <div
          style={{
            position: "absolute",
            left: `${containerSize.width / 2 - 150}px`,
            top: `${containerSize.height / 2 - 150}px`,
            width: "300px",
            height: "300px",
            border: "2px dashed red",
            boxSizing: "border-box",
          }}
        />
      )}
      <div
        ref={walkerRef}
        style={{
          position: "absolute",
          width: "130px",
          height: "130px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 2s ease-in-out, top 2s ease-in-out", // 移動アニメーションの時間を延長（2秒）
        }}
      />
    </div>
  );
};

export default RandomWalker;