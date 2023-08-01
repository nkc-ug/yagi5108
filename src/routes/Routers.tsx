import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../components/pages/AppView';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
      </Routes>
    </BrowserRouter>
  );
};
