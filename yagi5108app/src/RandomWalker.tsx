// Reactと関連するモジュールをインポート
import React, { useRef, useEffect, useState } from 'react';
// 画像ファイルをインポート
import image1 from '../image/yagi_syokuzi.png';

// ランダムに移動するコンポーネントの定義
const RandomWalker: React.FC = () => {
  // 画像要素の参照を作成
  const walkerRef = useRef<HTMLDivElement | null>(null);
  // 画像の位置を管理する状態変数を宣言
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // コンポーネントがマウントされた時に実行される副作用フック
  useEffect(() => {
    // 画像要素の参照を取得
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    // 画像要素の親要素（コンテナ）を取得
    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    // コンテナの幅と高さを取得
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    const centerX = containerWidth / 2 - walkerElement.clientWidth / 2; // 中央位置の修正
    const centerY = containerHeight / 2; // 画面の高さの中央

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

    // 一定間隔で位置を更新するタイマーを設定
    const intervalId = setInterval(updatePosition, 1000);

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 画像要素をレンダリング
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

// コンポーネントをエクスポート
export default RandomWalker;