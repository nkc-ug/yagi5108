import { useContext } from 'react';
import { Button } from '@mui/material';
import { LoginContext } from '../../provider/ContextProviders';
import { UserDataModal } from './UserDataModal';
import { useDiscloser } from '../../hooks/useDiscloser';

export const UserDataButton = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [modalOpen, handleUserModalOpen, handleUserModalClose] = useDiscloser(false);

  const userDataButton = async () => {
    // const userData = await getAuth(email);
    handleUserModalOpen();
  };

  if (login) {
    return (
      <div>
        <UserDataModal open={modalOpen} closeClick={handleUserModalClose} />
        <Button variant="outlined" color="primary" onClick={userDataButton}>
          ゆーざーでーた
        </Button>
      </div>
    );
  } else {
    return null;
  }
};
