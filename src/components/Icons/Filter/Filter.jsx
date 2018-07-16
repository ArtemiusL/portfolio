import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import modsClasses from '_utils/modsClasses';
import classnames from 'classnames';

import styles from './Filter.scss';

const Filter = ({ className, theme, status }) => {
  const classes = modsClasses(styles, { theme, status });
  return (
    <div
      styleName="root"
      className={classnames(className, classes)}
    >
      <span styleName="dote" />
      <span styleName="dote" />
      <span styleName="dote" />
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'black']),
  status: PropTypes.oneOf(['active', 'hidden', '']),
};

Filter.defaultProps = {
  theme: 'white',
  status: '',
};

export default CSSModules(Filter, styles);
