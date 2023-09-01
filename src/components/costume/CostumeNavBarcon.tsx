import { Container } from '@mui/material';
import { CostumeNavBar } from './CostumeNavbar';

export const CostumeNavBarCon = () => {
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
      <CostumeNavBar />
    </Container>
  );
};
