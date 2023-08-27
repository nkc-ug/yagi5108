import { Container } from '@mui/material';
import { FC } from 'react';
import { NavBar } from './NavBar';

type Props = {
  handleTutorialModalOpen: () => void;
  handleBattleModalOpen: () => void;
};

export const NavBarCon: FC<Props> = ({ handleTutorialModalOpen, handleBattleModalOpen }) => {
  return (
    <Container
      maxWidth="sm"
      disableGutters
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
      }}
    >
      <NavBar
        handleTutorialChange={handleTutorialModalOpen}
        handleBattleChange={handleBattleModalOpen}
      />
    </Container>
  );
};
