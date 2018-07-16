import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './Grid.scss';

const Grid = ({
  className,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  children,
  innerRef,
}) => (
  <div
    styleName={classnames('root', {
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,
    })}
    className={className}
    ref={innerRef}
  >
    {children}
  </div>
);

Grid.propTypes = {
  className: PropTypes.string,
  paddingTop: PropTypes.bool,
  paddingRight: PropTypes.bool,
  paddingBottom: PropTypes.bool,
  paddingLeft: PropTypes.bool,
  children: PropTypes.any,
  innerRef: PropTypes.func,
};

Grid.defaultProps = {
  paddingTop: true,
  paddingLeft: true,
  paddingRight: true,
  paddingBottom: true,
};

export default CSSModules(Grid, styles, { allowMultiple: true });
