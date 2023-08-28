import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../pages/AppView';
import { BattleView } from '../pages/BattleView';
import { CostumeView } from '../pages/CostumeView';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
        <Route path={'/battle'} element={<BattleView />} />
        <Route path={'/CostumeView'} element={<CostumeView />} />
      </Routes>
    </BrowserRouter>
  );
};
