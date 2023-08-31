import { useContext } from 'react';
import { Button, Grid } from '@mui/material';
import { BgImageBox } from './BgImageBox';
import night from '../../assets/night.png';
import noon from '../../assets/noon.png';
import sougen from '../../assets/sougen.png';
import umi from '../../assets/umi.png';
import mori from '../../assets/mori.png';
import { BackgroundContext } from '../../provider/ContextProviders';

export const ChangeBgImageBox = () => {
  const [BackgroundUrl, setBackgroundUrl] = useContext(BackgroundContext);
  type ImgItemType = {
    itemNumber: number;
    setItem: {
      groundUrl?: string;
      skyUrl?: string;
    };
    bgImgUrl: string;
  };

  const imgItemList: ImgItemType[] = [
    {
      itemNumber: 0,
      setItem: { groundUrl: 'sougen' },
      bgImgUrl: sougen,
    },
    {
      itemNumber: 1,
      setItem: { skyUrl: 'noon' },
      bgImgUrl: noon,
    },
    {
      itemNumber: 2,
      setItem: { groundUrl: 'umi' },
      bgImgUrl: umi,
    },
    {
      itemNumber: 3,
      setItem: { skyUrl: 'night' },
      bgImgUrl: night,
    },
    {
      itemNumber: 4,
      setItem: { groundUrl: 'mori' },
      bgImgUrl: mori,
    },
  ];

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      sx={{ alignItems: 'center', alignContent: 'center', wrap: 'wrap', height: '100%' }}
    >
      {imgItemList.map((item) => {
        return (
          <Grid item key={item.itemNumber} xs={6}>
            <Button
              onClick={() => {
                setBackgroundUrl({ ...BackgroundUrl, ...item.setItem });
              }}
              sx={{
                border: item.setItem.groundUrl
                  ? BackgroundUrl.groundUrl === item.setItem.groundUrl
                    ? '5px solid #e8d64d'
                    : ''
                  : BackgroundUrl.skyUrl === item.setItem.skyUrl
                  ? '5px solid #e8d64d'
                  : '',
              }}
            >
              <BgImageBox BgImageUrl={item.bgImgUrl} />
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={6} />
    </Grid>
  );
};
