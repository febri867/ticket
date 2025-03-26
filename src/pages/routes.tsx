import { Routes, Route } from 'react-router-dom';

import PartnerListPage from './partner-list/loadable';
import PartnerDetailPage from './partner-detail/loadable';
import PartnerServiceDetailPage from './partner-service-detail/loadable';
import PartnerServiceDetailEditPage from './partner-service-detail-edit/loadable';
import PartnerImportPage from './partner-import/loadable';
import PartnerImportListPage from './partner-import-list/loadable';
import PartnerImportDetailPage from './partner-import-detail/loadable';
import StoreImportCreatePage from './store-import-create/loadable';
import StoreDetailPage from './store-detail/loadable';
import StoreImportListPage from './store-import-list/loadable';
import StoreImportDetailPage from './store-import-detail/loadable';

const generateRoutes = (pages) => (
  <Routes>
    {pages.map(({ key, path, component }) => (
      <Route key={key} path={path} element={component} />
    ))}
  </Routes>
);

export const Privates = () => (
  <>
    {generateRoutes([
      PartnerListPage,
      PartnerDetailPage,
      PartnerServiceDetailPage,
      PartnerServiceDetailEditPage,
      PartnerImportPage,
      PartnerImportListPage,
      PartnerImportDetailPage,
      StoreImportCreatePage,
      StoreDetailPage,
      StoreImportListPage,
      StoreImportDetailPage,
    ])}
  </>
);
