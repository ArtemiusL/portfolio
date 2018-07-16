import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import { ROW_HEIGHT } from '../constants';
import styles from './GridRow.scss';

@CSSModules(styles, { allowMultiple: true })

class GridRow extends PureComponent {
  getHeight() {
    const { rows } = this.props;

    return rows === 'auto' ? '100%' : `${ROW_HEIGHT * rows}px`;
  }

  render() {
    const { children, withPaddings, rows } = this.props;
    const height = this.getHeight();
    const staticHeight = typeof rows === 'number';

    return (
      <div
        styleName={classnames('root', { withPaddings, staticHeight })}
        style={{ height }}
      >
        {children}
      </div>
    );
  }
}

GridRow.propTypes = {
  rows: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
  ]),
  withPaddings: PropTypes.bool,
  children: PropTypes.any,
};

GridRow.defaultProps = {
  rows: 1,
};

export default GridRow;
