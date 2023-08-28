import { ThemeProvider } from '@emotion/react';
import { FC } from 'react';
import { theme } from '../theme/theme';
import { ContextProviders } from './ContextProviders';

type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProviders>{children}</ContextProviders>
    </ThemeProvider>
  );
};
