import React, { PureComponent, Fragment } from 'react';

import grids from './grids';
import BaseGrid from './grids/BaseGrid';

import styles from './GridHelper.scss';

class GridHelper extends PureComponent {
  state = {
    isFullGridVisible: false,
    SpecialGrid: BaseGrid,
  };

  toggleGrid = (e) => {
    const showGrid = e.target.checked;

    if (showGrid) {
      document.body.classList.add('grid');
    } else {
      document.body.classList.remove('grid');
    }
  };

  toggleFullGrid = (e) => {
    const isFullGridVisible = e.target.checked;

    this.setState({ isFullGridVisible });
  };

  toggleSpecialGrid = (e) => {
    this.setState({ SpecialGrid: grids[e.target.value] });
  };

  render() {
    const { isFullGridVisible, SpecialGrid } = this.state;

    return (
      <Fragment>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" onChange={this.toggleGrid} />
          <input type="checkbox" onChange={this.toggleFullGrid} />
        </div>
        <div className={styles.radioWrapper}>
          {Object.keys(grids).map(key => (
            <input
              key={key}
              type="radio"
              name="grid"
              value={key}
              onChange={this.toggleSpecialGrid}
            />
          ))}
        </div>
        {isFullGridVisible && <SpecialGrid />}
      </Fragment>
    );
  }
}

export default GridHelper;
