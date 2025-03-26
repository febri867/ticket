import { loadable } from  '../../../src/shared/utils/loadable';

const PaymentPage = loadable(() => import('./index'));

const config = {
  key: 'payment',
  path: '/payment',
  component: <PaymentPage />,
};

export default config;
