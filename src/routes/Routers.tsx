import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../pages/AppView';
import { Firestore } from '../components/Firestore';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
        <Route path={'/firestore'} element={<Firestore />} />
      </Routes>
    </BrowserRouter>
  );
};
