<<<<<<< HEAD
import React, { useRef, useEffect, useState } from "react";
import yagi_left from "../image/yagi_left.png";
import yagi_right from "../image/yagi_right.png";
=======
// Reactと関連するモジュールをインポート
import React, { useRef, useEffect, useState } from 'react';
// 画像ファイルをインポート
import image1 from '../image/yagi_syokuzi.png';
>>>>>>> e77d824b4e623d2cafce5106da9e3326afdcc4ad

// ランダムに移動するコンポーネントの定義
const RandomWalker: React.FC = () => {
<<<<<<< HEAD
  const walkerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100, y: 300 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [rangeVisible, setRangeVisible] = useState(false);
=======
  // 画像要素の参照を作成
  const walkerRef = useRef<HTMLDivElement | null>(null);
  // 画像の位置を管理する状態変数を宣言
  const [position, setPosition] = useState({ x: 0, y: 0 });
>>>>>>> e77d824b4e623d2cafce5106da9e3326afdcc4ad

  // コンポーネントがマウントされた時に実行される副作用フック
  useEffect(() => {
    // 画像要素の参照を取得
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    // 画像要素の親要素（コンテナ）を取得
    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

<<<<<<< HEAD
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
=======
    // コンテナの幅と高さを取得
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    const centerX = containerWidth / 2 - walkerElement.clientWidth / 2; // 中央位置の修正
    const centerY = containerHeight / 2; // 画面の高さの中央
>>>>>>> e77d824b4e623d2cafce5106da9e3326afdcc4ad

    // 開始位置と終了位置の計算
    const startX = centerX - walkerElement.clientWidth / 2; // 開始位置のx座標
    const startY = centerY - walkerElement.clientHeight / 2; // 開始位置のy座標
    const endX = centerX + walkerElement.clientWidth / 2; // 終了位置のx座標
    const endY = centerY + walkerElement.clientHeight / 2; // 終了位置のy座標

    // 位置を更新する関数の定義
    const updatePosition = () => {
      const newX = startX + Math.random() * (endX - startX);
      const newY = startY + Math.random() * (endY - startY);

      // 位置を設定
      setPosition({ x: newX, y: newY });
    };

<<<<<<< HEAD
    const intervalId = setInterval(updatePosition, 3000); // 移動アニメーションの時間を延長（2000ミリ秒）
=======
    // 一定間隔で位置を更新するタイマーを設定
    const intervalId = setInterval(updatePosition, 1000);
>>>>>>> e77d824b4e623d2cafce5106da9e3326afdcc4ad

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => {
      clearInterval(intervalId);
    };
  }, [containerSize]);

  const toggleRangeVisibility = () => {
    setRangeVisible(!rangeVisible);
  };

  const backgroundImage =
    position.x > containerSize.width / 2 ? yagi_right : yagi_left;

  // 画像要素をレンダリング
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
          width: "100px",
          height: "100px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 2s ease-in-out, top 2s ease-in-out", // 移動アニメーションの時間を延長（2秒）
        }}
      />
      <button
        style={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={toggleRangeVisibility}
      >
        {rangeVisible ? "Hide Range" : "Show Range"}
      </button>
    </div>
  );
};

// コンポーネントをエクスポート
export default RandomWalker;