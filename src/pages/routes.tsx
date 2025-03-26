import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './home/loadable';
import Payment from './payment/loadable';

const generateRoutes = (pages: any[]) => (
  <Routes>
    {pages.map(({ key, path, component }) => (
      <Route key={key} path={path} element={component} />
    ))}
  </Routes>
);

export const RoutesModules = () => <BrowserRouter>{generateRoutes([Home, Payment])}</BrowserRouter>;
