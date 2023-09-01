import { UpdateUserData } from '../UpdateUserData';
import { GetUserData } from '../GetUserData';
import { TrophyType } from '../../../types/UserDataType';
import { UserDataType } from '../../../types/UserDataType';

export const AddTotalEatCount = (email: string, isLogin: boolean) => {
  const addCount = async () => {
    const response = await GetUserData(email);
    const count = response.totalEatCount + 1;
    !response.trophy.eatCount5 && count > 4 ? totalEatCount5Unlock(email, response) : null;
    !response.trophy.eatCount10 && count > 9 ? totalEatCount10Unlock(email, response) : null;
    UpdateUserData(email, 'totalEatCount', count);
  };
  isLogin ? addCount() : null;
};

const totalEatCount5Unlock = (email: string, response: UserDataType) => {
  const trophy: TrophyType = {
    eatCount5: true,
    eatCount10: response.trophy.eatCount10,
    battleWinCount3: response.trophy.battleWinCount3,
    battleWinCount5: response.trophy.battleWinCount5,
  };
  UpdateUserData(email, 'trophy', trophy);
};

const totalEatCount10Unlock = (email: string, response: UserDataType) => {
  const trophy: TrophyType = {
    eatCount5: response.trophy.eatCount5,
    eatCount10: true,
    battleWinCount3: response.trophy.battleWinCount3,
    battleWinCount5: response.trophy.battleWinCount5,
  };
  UpdateUserData(email, 'trophy', trophy);
};
