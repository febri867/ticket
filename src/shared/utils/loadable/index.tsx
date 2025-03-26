import { ComponentType, lazy, Suspense} from 'react';

export const loadable = (importFunc: () => Promise<{ default: ComponentType<any>; }>, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
