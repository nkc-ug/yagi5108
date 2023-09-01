import { useState, useEffect, FC, useContext } from 'react';
import { Box } from '@mui/material';
import yagi from '../assets/yagi.png';
import yagi_ikari from '../assets/yagi_ikari.png';
import yagi_tanosii from '../assets/yagi_tanosii.png';
import yagi_kanasimi from '../assets/yagi_kanasimi.png';
import yagi_yorokobi from '../assets/yagi_yorokobi.png';
import { convertCostume } from '../util/convertCostume';
import { GoatClothesContext } from '../provider/ContextProviders';

type Props = {
  typeId: number;
  walkEvo: () => void;
  containerSize: {
    width: number;
    height: number;
  };
};

const Pulse: FC<Props> = ({ typeId, walkEvo, containerSize }) => {
  const [isDisplayLeft, setIsDisplayLeft] = useState(true);
  const [clothesUrl] = useContext(GoatClothesContext);

  const position = {
    x: (containerSize.width / 5) * 3,
    y: (containerSize.height / 12) * 11,
  };
  useEffect(() => {
    //let intervalId: NodeJS.Timeout;

    const startBlinking = () => {
      setIsDisplayLeft((prevDisplay) => !prevDisplay);
    };

    // eslint-disable-next-line prefer-const
    const intervalId = setInterval(startBlinking, 300); // 300ミリ秒ごとに切り替える

    setTimeout(() => {
      clearInterval(intervalId);
      setIsDisplayLeft(false);
      walkEvo();
    }, 5000); // 8000ミリ秒 (8秒) 後に処理を停止する

    return () => {
      clearInterval(intervalId);
    };
  }, [walkEvo]);

  const getImagePath = (typeId: number) => {
    switch (typeId) {
      case 1:
        return yagi_yorokobi;
      case 2:
        return yagi_ikari;
      case 3:
        return yagi_kanasimi;
      case 4:
        return yagi_tanosii;
      default:
        return null;
    }
  };

  const backgroundImage = getImagePath(typeId);

  const costumeImage = convertCostume({
    costumeImgUrl: clothesUrl,
    isRight: false,
  });

  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          backgroundImage: `url(${isDisplayLeft ? yagi : backgroundImage})`,
          backgroundSize: 'cover',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <Box //衣装用のbox
          sx={{
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundImage: `url(${costumeImage})`,
          }}
        />
      </Box>
    </div>
  );
};

export default Pulse;
