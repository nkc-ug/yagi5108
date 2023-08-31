import { UpdateUserData } from '../UpdateUserData';
import { GetUserData } from '../GetUserData';

export const AddBattleWinCount = (email: string, isLogin: boolean) => {
  const addCount = async () => {
    const response = (await GetUserData(email)).battleWinCount + 1;
    UpdateUserData(email, 'battleWinCount', response);
  };
  isLogin ? addCount() : null;
};
