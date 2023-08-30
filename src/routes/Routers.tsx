import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../pages/AppView';
import { BattleView } from '../pages/BattleView';
import { CostumePage } from '../pages/CostumePage';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
        <Route path={'/battle'} element={<BattleView />} />
        <Route path={'/CostumePage'} element={<CostumePage />} />
      </Routes>
    </BrowserRouter>
  );
};
