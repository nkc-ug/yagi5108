import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../pages/AppView';
import { BattleView } from '../pages/BattleView';
import { CostumeView } from '../pages/CostumeView';
import { MonsterView } from '../pages/MonsterView';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
        <Route path={'/MonsterView'} element={<MonsterView />} />
        <Route path={'/battle'} element={<BattleView />} />
        <Route path={'/CostumeView'} element={<CostumeView />} />
      </Routes>
    </BrowserRouter>
  );
};
