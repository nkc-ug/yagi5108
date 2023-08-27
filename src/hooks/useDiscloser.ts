import { useState } from 'react';

type UseDiscloserType = [boolean, () => void, () => void];

export const useDiscloser = (initOpen: boolean): UseDiscloserType => {
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState(initOpen);

  const handleTutorialModalOpen = () => setIsTutorialModalOpen(true);
  const handleTutorialModalClose = () => setIsTutorialModalOpen(false);

  return [isTutorialModalOpen, handleTutorialModalOpen, handleTutorialModalClose];
};
