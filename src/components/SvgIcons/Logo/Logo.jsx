import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import modsClasses from '_utils/modsClasses';
import classnames from 'classnames';

import styles from './Logo.scss';

const Logo = ({ className, theme }) => {
  const classes = modsClasses(styles, { theme });
  return (
    <div
      styleName="root"
      className={classnames(className, classes)}
    >
      logo
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'black']),
};

Logo.defaultProps = {
  theme: 'white',
};

export default CSSModules(Logo, styles);
