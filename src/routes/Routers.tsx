import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppView } from '../pages/AppView';
import { BattleView } from '../pages/BattleView';
import { MonsterView } from '../pages/MonsterView';
import { CostumePage } from '../pages/CostumePage';
import { SettingsView } from '../pages/SettingsView';
import { TrophyPage } from '../pages/TrophyPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppView />} />
        <Route path={'/MonsterView'} element={<MonsterView />} />
        <Route path={'/battle'} element={<BattleView />} />
        <Route path={'/CostumePage'} element={<CostumePage />} />
        <Route path={'/SettingsView'} element={<SettingsView />} />
        <Route path={'/TrophyPage'} element={<TrophyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
