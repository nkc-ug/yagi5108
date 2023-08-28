import { CircularProgress, Container, Stack } from '@mui/material';
import { FC } from 'react';

type Props = {
  isOpen: boolean;
};

export const CircleProgressCon: FC<Props> = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            position: 'absolute',
            top: '30vh',
          }}
        >
          <Stack direction="row" justifyContent="center" zIndex={10}>
            <CircularProgress size={60} />
          </Stack>
        </Container>
      ) : null}
    </>
  );
};
