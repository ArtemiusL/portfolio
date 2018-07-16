import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import modsClasses from '_utils/modsClasses';
import classnames from 'classnames';

import styles from './SmallArrow.scss';

const SmallArrow = ({
  className,
  theme,
  duration,
  size,
}) => {
  const classes = modsClasses(styles, { theme, duration, size });
  return (
    <svg
      viewBox="0 0 37.57 37.93"
      styleName="root"
      className={classnames(className, classes)}
    >
      <g>
        <line className="line" y1="18.97" x2="36.16" y2="18.97" />
        <polyline className="polyline" points="17.9 0.71 36.16 18.97 17.9 37.23" />
      </g>
    </svg>
  );
};

SmallArrow.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'black']),
  duration: PropTypes.oneOf(['bottom', 'top', 'left']),
  size: PropTypes.oneOf(['small', 'big']),
};

SmallArrow.defaultProps = {
  theme: 'white',
};

export default CSSModules(SmallArrow, styles);
