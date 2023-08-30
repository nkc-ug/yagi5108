import yagi_ikari_right from '../assets/yagi_ikari_right.png';
import yagi_ikari from '../assets/yagi_ikari.png';
import yagi_kanasimi_right from '../assets/yagi_kanasimi_right.png';
import yagi_kanasimi from '../assets/yagi_kanasimi.png';
import yagi_right from '../assets/yagi_right.png';
import yagi from '../assets/yagi.png';
import yagi_syokuzi from '../assets/yagi_syokuzi.png';
import yagi_tanosii_right from '../assets/yagi_tanosii_right.png';
import yagi_tanosii from '../assets/yagi_tanosii.png';
import yagi_yorokobi_right from '../assets/yagi_yorokobi_right.png';
import yagi_yorokobi from '../assets/yagi_yorokobi.png';

type Props = {
  goatImgUrl: string;
  isRight: boolean;
};

export const convertGoat = ({ goatImgUrl, isRight }: Props): string => {
  // 画像名と左右から画像をswitchで判定
  switch (goatImgUrl) {
    // 怒り
    case 'yagi_ikari':
      return isRight ? yagi_ikari_right : yagi_ikari;
    // 悲しみ
    case 'yagi_kanasimi':
      return isRight ? yagi_kanasimi_right : yagi_kanasimi;
    // 食事
    case 'yagi_syokuzi':
      return yagi_syokuzi;
    // 楽しみ
    case 'yagi_tanosii':
      return isRight ? yagi_tanosii_right : yagi_tanosii;
    // 喜び
    case 'yagi_yorokobi':
      return isRight ? yagi_yorokobi_right : yagi_yorokobi;
    // 通常
    default:
      return isRight ? yagi_right : yagi;
  }
};
