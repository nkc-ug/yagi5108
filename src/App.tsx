import { CssBaseline } from '@mui/material';
import { Router } from './routes/Routers';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
};

export default App;
