import { Container } from '@mui/material';
import { FC } from 'react';
import { BattleNavBar } from './BattleNavbar';

type Props = {
  handleMonsterModalOpen: () => void;
};

export const BattleNavBarCon: FC<Props> = ({ handleMonsterModalOpen }) => {
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
      <BattleNavBar handleMonsterModalChange={handleMonsterModalOpen} />
    </Container>
  );
};
