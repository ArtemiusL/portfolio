import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import modsClasses from '_utils/modsClasses';

import styles from './Button.scss';

const Button = ({
  color,
  children,
  className,
  href,
  disabled,
  to,
  type,
  onClick,
  hover,
  target,
  ...props
}) => {
  const classes = modsClasses(styles, { color, hover });

  const CustomTag = (() => {
    if (to) return Link;
    if (href) return 'a';
    return 'button';
  })();

  return (
    <CustomTag
      styleName="root"
      className={classnames(className, classes)}
      to={to}
      href={href}
      target={target}
      disabled={disabled}
      type={href || to ? false.toString() : type}
      onClick={onClick}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  hover: PropTypes.oneOf(['white', 'black', 'opacity', 'white-to-black']),
};

Button.defaultProps = {
  type: 'button',
  target: 'self',
};

export default CSSModules(Button, styles);
