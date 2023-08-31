import costume_kigurumi_left from '../assets/costume_kigurumi_left.png';
import costume_kimono_left from '../assets/costume_kimono_left.png';
import costume_maid_left from '../assets/costume_maid_left.png';
import costume_mizugi_left from '../assets/costume_mizugi_left.png';
import costume_nurse_left from '../assets/costume_nurse_left.png';
import costume_police_left from '../assets/costume_police_left.png';
import costume_serahuku_left from '../assets/costume_serahuku_left.png';
import costume_seta_left from '../assets/costume_seta_left.png';
import costume_yubin_left from '../assets/costume_yubin_left.png';
import costume_kigurumi_right from '../assets/costume_kigurumi_right.png';
import costume_kimono_right from '../assets/costume_kimono_right.png';
import costume_maid_right from '../assets/costume_maid_right.png';
import costume_mizugi_right from '../assets/costume_mizugi_right.png';
import costume_nurse_right from '../assets/costume_nurse_right.png';
import costume_police_right from '../assets/costume_police_right.png';
import costume_serahuku_right from '../assets/costume_serahuku_right.png';
import costume_seta_right from '../assets/costume_seta_right.png';
import costume_yubin_right from '../assets/costume_yubin_right.png';

type Props = {
  costumeImgUrl: string;
  isRight: boolean;
};

export const convertCostume = ({ costumeImgUrl, isRight }: Props): string => {
  // 画像名と左右から画像をswitchで判定
  switch (costumeImgUrl) {
    //着ぐるみ
    case 'kigurumi':
      return isRight ? costume_kigurumi_right : costume_kigurumi_left;
    //着物
    case 'kimono':
      return isRight ? costume_kimono_right : costume_kimono_left;
    //メイド
    case 'maid':
      return isRight ? costume_maid_right : costume_maid_left;
    //水着
    case 'mizugi':
      return isRight ? costume_mizugi_right : costume_mizugi_left;
    //ナース
    case 'nurse':
      return isRight ? costume_nurse_right : costume_nurse_left;
    //警察
    case 'police':
      return isRight ? costume_police_right : costume_police_left;
    //セーラー服
    case 'serahuku':
      return isRight ? costume_serahuku_right : costume_serahuku_left;
    //どうていころすセーター
    case 'seta':
      return isRight ? costume_seta_right : costume_seta_left;
    //郵便屋さん
    case 'yubin':
      return isRight ? costume_yubin_right : costume_yubin_left;
    //通常
    default:
      return '';
  }
};
