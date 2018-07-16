import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import {
  Grid,
  GridRow,
  GridColumn,
} from '_components/Grid/desktop';

import Text from '_components/Text';

import styles from './FixedContent.scss';

const FixedContent = ({ date }) => (
  <div styleName="root">
    <Grid>
      <GridRow fullWindow rows={3} />

      <GridRow fullWindow rows={1}>
        <GridColumn columns={1} position="left bottom">
          <Text
            rotate="right"
            tag="span"
            color="white"
          >
            Scroll to read
          </Text>
        </GridColumn>
        <GridColumn columns={11} />
      </GridRow>

      <GridRow fullWindow rows={1} />

      <GridRow fullWindow rows={1}>
        <GridColumn columns={1}>
          <Text
            tag="span"
            color="white"
          >
            {date}
          </Text>
        </GridColumn>
        <GridColumn columns={10} />
      </GridRow>

    </Grid>
  </div>
);

FixedContent.propTypes = {
  date: PropTypes.any,
};

export default CSSModules(FixedContent, styles);
