import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import modsClasses from '_utils/modsClasses';
import classnames from 'classnames';

import styles from './Menu.scss';

const Menu = ({ className, theme, status }) => {
  const classes = modsClasses(styles, { theme, status });
  return (
    <div
      styleName="root"
      className={classnames(className, classes)}
    >
      <span styleName="line" />
      <span styleName="line" />
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'black']),
  status: PropTypes.oneOf(['active', 'hidden', '']),
};

Menu.defaultProps = {
  theme: 'white',
  status: '',
};

export default CSSModules(Menu, styles);
