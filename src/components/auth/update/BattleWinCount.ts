import { UpdateUserData } from '../UpdateUserData';
import { GetUserData } from '../GetUserData';
import { TrophyType } from '../../../types/UserDataType';
import { UserDataType } from '../../../types/UserDataType';

export const AddBattleWinCount = (email: string, isLogin: boolean) => {
  const addCount = async () => {
    const response = await GetUserData(email);
    const count = response.battleWinCount + 1;
    !response.trophy.battleWinCount3 && count > 2 ? battleWinCount3Unlock(email, response) : null;
    !response.trophy.battleWinCount5 && count > 4 ? battleWinCount5Unlock(email, response) : null;
    UpdateUserData(email, 'battleWinCount', count);
  };
  isLogin ? addCount() : null;
};

const battleWinCount3Unlock = (email: string, response: UserDataType) => {
  const trophy: TrophyType = {
    eatCount5: response.trophy.eatCount5,
    eatCount10: response.trophy.eatCount10,
    battleWinCount3: true,
    battleWinCount5: response.trophy.battleWinCount5,
  };
  UpdateUserData(email, 'trophy', trophy);
};

const battleWinCount5Unlock = (email: string, response: UserDataType) => {
  const trophy: TrophyType = {
    eatCount5: response.trophy.eatCount5,
    eatCount10: response.trophy.eatCount10,
    battleWinCount3: response.trophy.battleWinCount3,
    battleWinCount5: true,
  };
  UpdateUserData(email, 'trophy', trophy);
};
