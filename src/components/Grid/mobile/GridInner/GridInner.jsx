import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import styles from './GridInner.scss';

const GridInner = ({ withPaddings, children }) => (
  <div styleName={classnames('root', { withPaddings })}>{children}</div>
);

GridInner.propTypes = {
  withPaddings: PropTypes.bool,
  children: PropTypes.any,
};

export default CSSModules(GridInner, styles);
