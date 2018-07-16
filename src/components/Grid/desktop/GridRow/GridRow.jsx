import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import {
  ROWS_HEIGHT,
  MAX_ROWS,
  BORDER_VERTICAL,
} from '../constants';

import styles from './GridRow.scss';

@CSSModules(styles)
class GridRow extends PureComponent {
  getHeight() {
    const { rows, fullWindow } = this.props;

    if (fullWindow) {
      return (100 / MAX_ROWS) * rows;
    }

    return ROWS_HEIGHT * rows;
  }

  render() {
    const {
      withoutHeight,
      fullWindow,
      children,
      rows,
    } = this.props;

    const height = this.getHeight();
    const borderCompensation = ((BORDER_VERTICAL * 2) / MAX_ROWS) * rows;
    const rowStyles = {
      height: fullWindow ? `calc(${height}vh - ${borderCompensation}px)` : `${height}px`,
    };

    return (
      <div styleName="root" style={!withoutHeight ? rowStyles : null}>
        {children}
      </div>
    );
  }
}

GridRow.propTypes = {
  withoutHeight: PropTypes.bool,
  fullWindow: PropTypes.bool,
  rows: PropTypes.number,
  children: PropTypes.any,
};

GridRow.defaultProps = {
  rows: 1,
  fullWindow: false,
};

export default GridRow;
