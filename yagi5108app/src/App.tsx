import { Container, Box } from '@mui/material';
import bgImage from '../image/背景.png';

const App = () => {
  return (
    <Box
      style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          maxHeight: '100vh', 
        }}
      >
        <img src={bgImage} alt="" style={{ width: 'auto', height: 'auto', maxHeight: '100%' }} />
      </Container>
    </Box>
  );
};

export default App;
