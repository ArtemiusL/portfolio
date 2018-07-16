import React from 'react';
import { Grid, GridRow, GridInner } from '_components/Grid/mobile';

import getRows from './getRows';
import styles from './styles.scss';

const BaseGrid = () => (
  <div className={styles.gridWrapper}>
    <Grid paddingBottom={false}>
      <GridInner>
        <GridRow rows="auto">
          <GridInner>
            {getRows(1, 2)}
            {getRows(1, 'auto')}
          </GridInner>
        </GridRow>
        {getRows(1, 'auto')}
      </GridInner>
      {getRows(2, 1)}
    </Grid>
  </div>
);

export default BaseGrid;
