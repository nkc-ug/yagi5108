import React, { useRef, useLayoutEffect, FC } from 'react';
import { Container } from '@mui/material';

type Props = {
  updatePageSize: (
    newContainerSize: React.SetStateAction<{
      width: number;
      height: number;
    }>
  ) => void;
};

export const PageContainer: FC<Props> = ({ updatePageSize }) => {
  const walkerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    const updateContainerSize = () => {
      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;
      updatePageSize({ width: containerWidth, height: containerHeight });
    };

    updateContainerSize(); // 初回描画時にコンテナサイズを更新

    const resizeObserver = new ResizeObserver(updateContainerSize);
    resizeObserver.observe(containerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Container
      ref={walkerRef}
      style={{ position: 'absolute', width: '100%', height: '100%', padding: 0, margin: 0 }}
    />
  );
};
