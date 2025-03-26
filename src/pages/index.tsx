import React from 'react';
import { useLocation } from 'react-router-dom';
// @ts-expect-error expected to error
import { init } from '@virgoland/layout';
import { Privates } from './routes';

const Pages = () => {
  const [loggedIn, setLogin] = React.useState(false);
  const { pathname, search } = useLocation();

  React.useEffect(() => {
    if (!loggedIn) {
      init(() => setLogin(true));
    }
  }, [pathname, search]);

  return <>{loggedIn ? <Privates /> : null}</>;
};

export default Pages;
