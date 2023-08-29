import monster_ikari from '../assets/monster/monster_ikari.png';
import monster_kanasii from '../assets/monster/monster_kanasii.png';
import monster_tanosii from '../assets/monster/monster_tanosii.png';
import monster_uresii from '../assets/monster/monster_uresii.png';

type Props = {
  monsterImgUrl: string;
};

export const convertMonster = ({ monsterImgUrl }: Props): string => {
  // 画像名と左右から画像をswitchで判定
  switch (monsterImgUrl) {
    // 怒り
    case 'monster_ikari':
      return monster_ikari;
    // 悲しみ
    case 'monster_kanasii':
      return monster_kanasii;
    // 楽しみ
    case 'monster_tanosii':
      return monster_tanosii;
    // 喜び
    case 'monster_yorokobi':
      return monster_uresii;

    default:
      return monster_uresii;
  }
};
