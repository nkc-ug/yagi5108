export type UserDataType = {
  userName: string;
  totalEatCount: number;
  battleWinCount: number;
  goatType: string;
  goatClothes: string;
  trophy: TrophyType;
};

export type TrophyType = {
  eatCount5: boolean;
  eatCount10: boolean;
  battleWinCount3: boolean;
  battleWinCount5: boolean;
};

export type UserProps = {
  userId: string;
  userName: string;
};

/*
Trophy更新用のテンプレ
const totalEatCount5Unlock = (email: string, response: UserDataType) => {
  const trophy: TrophyType = {
    eatCount5: response.trophy.eatCount5,
    eatCount10: response.trophy.eatCount10,
    battleWinCount3: response.trophy.battleWinCount3,
    battleWinCount5: response.trophy.battleWinCount5,
  };
  UpdateUserData(email, 'trophy', trophy);
};
*/
