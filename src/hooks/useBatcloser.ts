import { useState } from 'react';

export const useBatCloser = (battleOpen: boolean) => {
  const [isBattleModalOpen, setIsBattleModalOpen] = useState(battleOpen);

  const handleBattleModalOpen = () => setIsBattleModalOpen(true);
  const handleBattleModalClose = () => setIsBattleModalOpen(false);

  return { isBattleModalOpen, handleBattleModalOpen, handleBattleModalClose };
};

// useHooks
