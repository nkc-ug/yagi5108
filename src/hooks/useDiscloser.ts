import { useState } from 'react';

export const useDiscloser = (initOpen: boolean) => {
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(initOpen);

  const handleTutorialModalOpen = () => setIsTutorialModalOpen(true);
  const handleTutorialModalClose = () => setIsTutorialModalOpen(false);

  return { isTutorialModalOpen, handleTutorialModalOpen, handleTutorialModalClose };
};

// useHooks
