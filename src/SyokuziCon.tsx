import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import yagi_syokuzi from './assets/yagi_syokuzi.png';
import yagi_left from './assets/yagi_left.png';

export const SyokuziCon = () => {
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showImage ? (
        <Box
          sx={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            backgroundImage: `url(${yagi_syokuzi})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            backgroundImage: `url(${yagi_left})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      )}
    </div>
  );
};
export default SyokuziCon;
