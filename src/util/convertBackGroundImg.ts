import noon from '../assets/noon.png';
import night from '../assets/night.png';
import sougen from '../assets/sougen.png';
import umi from '../assets/umi.png';
import mori from '../assets/mori.png';
import { string } from 'prop-types';

type Props = {
  skyUrl: string;
  groundUrl: string;
};

export const convertBackGroundImg = ({
  skyUrl,
  groundUrl,
}: Props): { skyUrl: string; groundUrl: string } => {
  //画像名と昼と夜で画像をswitchで判定
  switch (groundUrl) {
    //草原
    case 'sougen':
      return skyUrl === 'noon'
        ? { skyUrl: noon, groundUrl: sougen }
        : { skyUrl: night, groundUrl: sougen };
    //海
    case 'umi':
      return skyUrl === 'noon'
        ? { skyUrl: noon, groundUrl: umi }
        : { skyUrl: night, groundUrl: umi };
    //森
    case 'mori':
      return skyUrl === 'noon'
        ? { skyUrl: noon, groundUrl: mori }
        : { skyUrl: night, groundUrl: mori };
    //エラー時の処理
    default:
      return { skyUrl: noon, groundUrl: sougen };
  }
};
