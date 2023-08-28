import { CssBaseline } from '@mui/material';
import { Router } from './routes/Routers';
import { Providers } from './provider/Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <CssBaseline />
      <Router />
    </Providers>
  );
};

export default App;
