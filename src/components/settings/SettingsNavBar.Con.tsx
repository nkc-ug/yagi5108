import { Container } from '@mui/material';
import { FC } from 'react';
import { SettingsNavBar } from './SettingsNavbar';

// type Props = {
//   handleTutorialModalOpen: () => void;
// };

export const SettingsNavBarCon: FC = () => {
  return (
    <Container
      maxWidth="sm"
      disableGutters
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
      }}
    >
      <SettingsNavBar />
    </Container>
  );
};
