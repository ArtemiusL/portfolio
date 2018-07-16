import HomePage from '_pages/HomePage';
import ArticlePage from '_pages/ArticlePage';
import NotFoundPage from '_pages/NotFoundPage';
import UIPage from '_pages/UIPage';
import App from './app';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
        pageConfig: {
          filterMenu: false,
          footer: false,
        },
      },
      {
        path: '/articles/:id',
        exact: true,
        component: ArticlePage,
        pageConfig: {
          filterMenu: false,
          footer: false,
        },
      },
      {
        path: '/ui',
        exact: true,
        component: UIPage,
        pageConfig: {
          filterMenu: false,
          footer: false,
        },
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
