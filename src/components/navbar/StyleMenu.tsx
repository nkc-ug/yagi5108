import { Menu, MenuItem } from '@mui/material';
import { FC, useContext } from 'react';
import { GoatContext } from '../../provider/ContextProviders';

type Props = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
};

export const StyleMenu: FC<Props> = ({ anchorEl, open, handleClose }) => {
  const [_, setGoatUrl] = useContext(GoatContext);

  return (
    <Menu anchorEl={anchorEl} open={open}>
      <MenuItem
        onClick={() => {
          setGoatUrl('yagi_ikari');
          handleClose();
        }}
      >
        怒りの姿
      </MenuItem>
      <MenuItem
        onClick={() => {
          setGoatUrl('yagi_kanasimi');
          handleClose();
        }}
      >
        悲しみの姿
      </MenuItem>
      <MenuItem
        onClick={() => {
          setGoatUrl('yagi_tanosii');
          handleClose();
        }}
      >
        楽しい姿
      </MenuItem>
    </Menu>
  );
};
