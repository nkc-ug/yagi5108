import { useContext } from 'react';
import { Button } from '@mui/material';
import { IsLoginContext } from '../../provider/ContextProviders';
import { UserDataModal } from './UserDataModal';
import { useDiscloser } from '../../hooks/useDiscloser';

export const UserDataButton = () => {
  const [isLogin] = useContext(IsLoginContext);
  const [modalOpen, handleUserModalOpen, handleUserModalClose] = useDiscloser(false);

  const userDataButton = async () => {
    handleUserModalOpen();
  };

  return isLogin ? (
    <div>
      <UserDataModal open={modalOpen} closeClick={handleUserModalClose} />
      <Button variant="outlined" color="primary" onClick={userDataButton}>
        ゆーざーでーた
      </Button>
    </div>
  ) : null;
};
