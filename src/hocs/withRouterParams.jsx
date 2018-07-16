/* eslint-disable */
import React from 'react';
import { compose } from 'redux';
import { withRouter, matchPath } from 'react-router-dom';

import routesConfig from '../routes';

const getActiveRouteIndex = (pathname, routes) => (
  routes.findIndex((el) => {
    if (pathname === '/' && el.path === '/') {
      return true;
    }

    return pathname.includes(el.path !== '/' && el.path.split('/')[1]);
  })
);

/* eslint-disable react/prop-types */
const withRouterParams = WrappedComponent => (props) => {
  const { routes } = routesConfig[0];
  const activeIndex = getActiveRouteIndex(props.location.pathname, routes);
  const match = matchPath(props.location.pathname, { path: routes[activeIndex].path });
  const pageConfig = routes[activeIndex].pageConfig;

  return <WrappedComponent
    {...props}
    currentMatch={match}
    pageConfig={pageConfig}
  />;
};
/* eslint-enable react/prop-types */

export default compose(
  withRouter,
  withRouterParams
);
