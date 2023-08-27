import { useState } from 'react';

export const useBatcloser = (battleOpen: boolean) => {
  const [isBattleModalOpen, setisBattleModalOpen] = useState(battleOpen);

  const handleBattleModalOpen = () => setisBattleModalOpen(true);
  const handleBattleModalClose = () => setisBattleModalOpen(false);

  return { isBattleModalOpen, handleBattleModalOpen, handleBattleModalClose };
};

// useHooks
