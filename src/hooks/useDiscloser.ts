import { useState } from 'react';

export const useDiscloser = (initOpen: boolean) => {
  const [isTutorialModalOpen, setisTutorialModalOpen] = useState(initOpen);

  const handleTutorialModalOpen = () => setisTutorialModalOpen(true);
  const handleTutorialModalClose = () => setisTutorialModalOpen(false);

  return { isTutorialModalOpen, handleTutorialModalOpen, handleTutorialModalClose };
};

// useHooks
