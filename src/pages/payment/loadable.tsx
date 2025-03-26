import { loadable } from '@/shared/utils/loadable';

const HomePage = loadable(() => import('./index'));

const config = {
  path: '/',
  component: <HomePage />,
};

export default config;
