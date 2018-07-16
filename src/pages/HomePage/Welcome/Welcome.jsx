import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

// import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

import mePhoto from '_images/me@2x.png';

import styles from './Welcome.scss';

const Welcome = ({
  className,
  children,
}) => (
  <div className={className} styleName="root">
    {children}
    <img src={mePhoto} alt="Artem Konovalov" />
  </div>
);

Welcome.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CSSModules(Welcome, styles);
