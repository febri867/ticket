import { loadable } from '../../../src/shared/utils/loadable';

const HomePage = loadable(() => import('./index'));

const config = {
  key: 'home',
  path: '/',
  component: <HomePage />,
};

export default config;
