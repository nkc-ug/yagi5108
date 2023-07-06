import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import yagi_left from './assets/yagi_left.png';
import yagi_ikari from './assets/yagi_iakri.png';
import yagi_tanosii from './assets/yagi_tanosii.png';
import yagi_kanasimi from './assets/yagi_kanasimi.png';
import yagi_yorokobi from './assets/yagi_yorokobi.png';

type Props = {
  typeId: number;
  walkEvo: () => void;
};

const Evoanimee: FC<Props> = ({ typeId, walkEvo }) => {
  const [isDisplayLeft, setIsDisplayLeft] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startBlinking = () => {
      setIsDisplayLeft((prevDisplay) => !prevDisplay);
    };

    // eslint-disable-next-line prefer-const
    intervalId = setInterval(startBlinking, 300); // 300ミリ秒ごとに切り替える

    setTimeout(() => {
      clearInterval(intervalId);
      setIsDisplayLeft(false);
      props.WalkEvo();
    }, 5000); // 8000ミリ秒 (8秒) 後に処理を停止する

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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

  const backgroundImage = getImagePath(props.typeId);

  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          backgroundImage: `url(${isDisplayLeft ? yagi_left : backgroundImage})`,
          backgroundSize: 'cover',
          left: '240px',
        }}
      />
    </div>
  );
};

export default Evoanimee;
