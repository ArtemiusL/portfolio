import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { GridRow, GridColumn } from '_components/Grid/mobile';

export default (rows, rowHeight) => (
  [...Array(rows).keys()].map(() => (
    <GridRow key={uniqueId('row-')} rows={rowHeight}>
      {[...Array(4).keys()].map(() => (
        <GridColumn key={uniqueId('column-')} />
      ))}
    </GridRow>
  ))
);
