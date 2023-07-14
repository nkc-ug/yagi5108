import { useState } from 'react';

export const useDiscloser = (initOpen: boolean) => {
  const [isOpen, setIsOpen] = useState(initOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

// useHooks
