import { UpdateUserData } from '../UpdateUserData';
import { GetUserData } from '../GetUserData';

export const AddTotalEatCount = (email: string, isLogin: boolean) => {
  const addCount = async () => {
    const response = (await GetUserData(email)).totalEatCount + 1;
    UpdateUserData(email, 'totalEatCount', response);
  };
  isLogin ? addCount() : null;
};
