import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import modsClasses from '_utils/modsClasses';

import styles from './WithHoverUnderline.scss';

const WithHoverUnderline = ({
  className,
  children,
  theme,
}) => {
  const classes = modsClasses(styles,
    {
      theme,
    },
  );

  return (
    <div className={classnames(className, classes)}>
      {children}
    </div>
  );
};

WithHoverUnderline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.oneOf(['white', 'black']),
};

export default CSSModules(WithHoverUnderline, styles);
