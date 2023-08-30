import { CssBaseline } from '@mui/material';
import { Router } from './routes/Routers';
import { Providers } from './provider/Providers';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Providers>
        <Router />
      </Providers>
    </>
  );
};

export default App;
