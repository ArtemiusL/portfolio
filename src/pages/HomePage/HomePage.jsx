/* eslint-disable */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import Text from '_components/Text';
import Welcome from './Welcome';

import styles from './HomePage.scss';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <div styleName="root">
      <Welcome />
    </div>
  </Fragment>
);

export default CSSModules(HomePage, styles);
