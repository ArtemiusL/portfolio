import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './GridColumn.scss';

const GridColumn = ({ columns, position, children }) => {
  const positionArray = position.split(' ');
  const hPosition = positionArray[0];
  const vPosition = positionArray[1];

  return (
    <div
      styleName={classnames('root', `hPosition-${hPosition}`, `vPosition-${vPosition}`)}
      style={{ flexGrow: columns }}
    >
      {children}
    </div>
  );
};

GridColumn.propTypes = {
  columns: PropTypes.number,
  position: PropTypes.string,
  children: PropTypes.any,
};

GridColumn.defaultProps = {
  columns: 1,
  position: 'left top',
};

export default CSSModules(GridColumn, styles, { allowMultiple: true });
