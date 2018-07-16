/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Helmet from 'react-helmet';
import Text from '_components/Text';
import PageLoad from '_components/AnimationWrapper/PageLoad';
import Animated from '_components/Animated';

import {
  Grid,
  GridRow,
  GridColumn,
} from '_components/Grid/desktop';

import styles from './TestComponent.scss';

@CSSModules(styles, { allowMultiple: true })
class TestComponent extends Component {
  state = {
    isVisible: false,
  };

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }
  render() {
    const { className } = this.props;

    return (
      <Grid>
        <GridRow rows={1} />
        <GridRow rows={2}>
          <GridColumn columns={3} position="right bottom">
            <PageLoad delayIn={200}>
              <Text color="white">Мой компонент</Text>
            </PageLoad>
          </GridColumn>
          <GridColumn columns={9} />
        </GridRow>

        <GridRow rows={2}>
          <GridColumn columns={3} position="right bottom">
            <Animated isVisible={this.state.isVisible}>
              <Text color="white">Our text</Text>
            </Animated>
          </GridColumn>
          <GridColumn columns={1} />
          <GridColumn columns={1}>
            <button onClick={this.handleClick}><Text color="white">Изменись</Text></button>
          </GridColumn>
          <GridColumn columns={7} />
        </GridRow>
      </Grid>
    );
  }
}

TestComponent.propTypes = {
  className: PropTypes.string,
};


export default TestComponent;
