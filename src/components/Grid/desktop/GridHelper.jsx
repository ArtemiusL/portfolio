import React, { PureComponent, Fragment } from 'react';
import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

class GridHelper extends PureComponent {
  state = {
    isFullGridVisible: false,
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

  render() {
    const { isFullGridVisible } = this.state;

    return (
      <Fragment>
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000',
          }}
        >
          <input
            type="checkbox"
            onChange={this.toggleGrid}
          />
          <input
            type="checkbox"
            onChange={this.toggleFullGrid}
          />
        </div>
        {isFullGridVisible &&
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '10000',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <Grid>
              {[...Array(8).keys()].map(row => (
                <GridRow key={`row-${row}`}>
                  {[...Array(12).keys()].map(column => (
                    <GridColumn key={`column-${row}-${column}`} />
                  ))}
                </GridRow>
              ))}
            </Grid>
          </div>
        }
      </Fragment>
    );
  }
}

export default GridHelper;
