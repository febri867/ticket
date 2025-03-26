import { loadable } from '@/shared/utils/loadable';
import { stringPermission } from '@/shared/utils/permission';

const PartnerListPage = loadable(() => import('./index'));

const config = {
  key: stringPermission.partnerManagementPartnerList,
  path: '/east-pay/partner-management/partner/list',
  component: <PartnerListPage />,
};

export default config;
