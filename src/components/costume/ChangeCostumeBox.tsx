import { useContext } from 'react';
import { Button, Grid } from '@mui/material';
import costume_kigurumi_left from '../../assets/costume_kigurumi_left.png';
import costume_kimono_left from '../../assets/costume_kimono_left.png';
import costume_maid_left from '../../assets/costume_maid_left.png';
import costume_mizugi_left from '../../assets/costume_mizugi_left.png';
import costume_nurse_left from '../../assets/costume_nurse_left.png';
import costume_police_left from '../../assets/costume_police_left.png';
import costume_serahuku_left from '../../assets/costume_serahuku_left.png';
import costume_seta_left from '../../assets/costume_seta_left.png';
import costume_yubin_left from '../../assets/costume_yubin_left.png';
import yagi_left from '../../assets/yagi.png';
import { CostumeBox } from './CostumeBox';
import { GoatClothesContext } from '../../provider/ContextProviders';

export const ChangeCostumeBox = () => {
  const [clothesUrl, setClothesUrl] = useContext(GoatClothesContext);

  type ImgItemType = {
    itemNumber: number;
    setItem: {
      costumeImgUrl: string;
    };
    bgImgUrl: string;
  };

  const imgItemList: ImgItemType[] = [
    { itemNumber: 0, setItem: { costumeImgUrl: 'yagi' }, bgImgUrl: yagi_left },
    { itemNumber: 1, setItem: { costumeImgUrl: 'kigurumi' }, bgImgUrl: costume_kigurumi_left },
    { itemNumber: 2, setItem: { costumeImgUrl: 'kimono' }, bgImgUrl: costume_kimono_left },
    { itemNumber: 3, setItem: { costumeImgUrl: 'maid' }, bgImgUrl: costume_maid_left },
    { itemNumber: 4, setItem: { costumeImgUrl: 'mizugi' }, bgImgUrl: costume_mizugi_left },
    { itemNumber: 5, setItem: { costumeImgUrl: 'nurse' }, bgImgUrl: costume_nurse_left },
    { itemNumber: 6, setItem: { costumeImgUrl: 'police' }, bgImgUrl: costume_police_left },
    { itemNumber: 7, setItem: { costumeImgUrl: 'serahuku' }, bgImgUrl: costume_serahuku_left },
    { itemNumber: 8, setItem: { costumeImgUrl: 'seta' }, bgImgUrl: costume_seta_left },
    { itemNumber: 9, setItem: { costumeImgUrl: 'yubin' }, bgImgUrl: costume_yubin_left },
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
          <Grid item key={item.itemNumber} xs={4}>
            <Button
              onClick={() => {
                setClothesUrl(item.setItem.costumeImgUrl);
              }}
              style={{
                backgroundColor: clothesUrl === item.setItem.costumeImgUrl ? '#d4d4d4' : '#FFFFFF',
              }} //妥協点
              sx={{
                border:
                  clothesUrl === item.setItem.costumeImgUrl
                    ? '5px solid #e8d64d'
                    : '1px solid #000',
              }}
            >
              <CostumeBox CostumeImage={item.bgImgUrl} />
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};
