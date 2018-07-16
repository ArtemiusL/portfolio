import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GridInner.scss';

const GridInner = ({ children }) => (
  <div styleName="root">{children}</div>
);

GridInner.propTypes = {
  children: PropTypes.any,
};

export default CSSModules(GridInner, styles);
