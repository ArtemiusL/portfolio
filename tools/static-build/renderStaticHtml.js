import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import renderHtml from '../../src/utils/renderHtml';

export default (routes, assets) => {
  const pagesToRender = routes[0].routes;

  const pages = pagesToRender
    .map(({ path, name }) => ({ path, name }));

  const staticContext = {};

  return pages.map(({ path, name }) => {
    const ReactComponent = (
      <StaticRouter location={path} context={staticContext}>
        {renderRoutes(routes)}
      </StaticRouter>
    );

    const componentHtml = renderToString(ReactComponent);
    const head = Helmet.renderStatic();

    const html = renderHtml(head, assets, componentHtml);

    return {
      path,
      name,
      html,
    };
  });
};
