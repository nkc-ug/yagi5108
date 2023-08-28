import { Container } from '@mui/material';
import { FC } from 'react';
import { BattleNavBar } from './BattleNavbar';

type Props = {
  handleBattleModalOpen: () => void;
};

export const BattleNavBarCon: FC<Props> = ({ handleBattleModalOpen }) => {
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
      <BattleNavBar handleBattleChange={handleBattleModalOpen} />
    </Container>
  );
};
