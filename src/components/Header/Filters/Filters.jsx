import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import FilterText from '_components/AnimationWrapper/FilterText';
import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';
import Animated from '_components/Animated';
import Button from '_components/Button';
import Text from '_components/Text';

import FiltersList from './FiltersList';

import content from './content';

import styles from './Filters.scss';

const Filters = ({ activeFilter }) => (
  <Animated
    isVisible={activeFilter}
    animationIn="slideInRight"
    animationOut="slideOutRight"
    easingShape="cubic-bezier(0.215, 0.61, 0.355, 1)"
    duration={200}
    delay={{
      in: 0,
      out: 250,
    }}
    styleName="root"
  >
    <Grid>
      <GridRow fullWindow rows={2} />

      <GridRow fullWindow rows={1}>
        <GridColumn columns={12}>
          <FilterText
            isVisible={activeFilter}
            delayIn={200}
          >
            <Text
              tag="h6"
              size="normal"
              fontWeight="normal"
              color="black"
              pointerEvents="none"
            >
              {content.title}
            </Text>
          </FilterText>
        </GridColumn>
      </GridRow>

      <GridRow fullWindow rows={2}>
        <GridColumn columns={12}>
          <FiltersList
            filters={content.filters}
            activeFilter={activeFilter}
          />
        </GridColumn>
      </GridRow>

      <GridRow fullWindow rows={1} />

      <GridRow fullWindow rows={2}>
        <GridColumn columns={12} position="left bottom">
          <FilterText
            isVisible={activeFilter}
            delayIn={1000}
          >
            <Button to={content.footerLink.link}>
              <Text
                tag="span"
                size="normal"
                fontWeight="normal"
                color="black"
                hover="black"
              >
                {content.footerLink.title}
              </Text>
            </Button>
          </FilterText>
        </GridColumn>
      </GridRow>
    </Grid>
  </Animated>
);

Filters.propTypes = {
  activeFilter: PropTypes.bool.isRequired,
};

export default CSSModules(Filters, styles);
