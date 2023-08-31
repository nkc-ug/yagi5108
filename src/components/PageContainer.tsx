import { useRef, useLayoutEffect, FC, useCallback } from 'react';
import { Container } from '@mui/material';

type Props = {
  updatePageSize: (
    newContainerSize: React.SetStateAction<{
      width: number;
      height: number;
    }>
  ) => void;
  children: React.ReactNode;
};

export const PageContainer: FC<Props> = ({ updatePageSize, children }) => {
  const walkerRef = useRef<HTMLDivElement>(null);

  const updateContainerSize = useCallback(() => {
    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
    updatePageSize({ width: containerWidth, height: containerHeight });
  }, []);

  useLayoutEffect(() => {
    updateContainerSize(); // 初回描画時にコンテナサイズを更新

    const walkerElement = walkerRef.current;
    if (!walkerElement) return;

    const containerElement = walkerElement.parentElement;
    if (!containerElement) return;

    const resizeObserver = new ResizeObserver(updateContainerSize);
    resizeObserver.observe(containerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateContainerSize]);

  return (
    <Container ref={walkerRef} style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
      {children}
    </Container>
  );
};
