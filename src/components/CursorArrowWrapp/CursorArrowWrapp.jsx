import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './CursorArrowWrapp.scss';

const CursorArrowWrapp = ({ children }) => (
  <div styleName="root">
    {children}
  </div>
);

CursorArrowWrapp.propTypes = {
  children: PropTypes.any,
};

export default CSSModules(CursorArrowWrapp, styles);
