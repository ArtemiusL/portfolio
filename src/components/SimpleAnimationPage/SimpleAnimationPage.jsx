import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import delay from 'lodash/delay';

import styles from './SimpleAnimationPage.scss';
import Animated from '_components/Animated';

/* eslint-disable */
class SimpleAnimationPage extends Component {
  state ={ animating: true }

  componentDidMount() {
    delay(() => {
      this.setState({ animating: false });
      window.scrollTo(0, 0);
    }, 600);
  }

  componentWillReceiveProps(nextProps) {
    const { location: { pathname } } = this.props;
    const { location: { pathname: nextPathname } } = nextProps;

    if (pathname !== nextPathname) {
      this.startAnimate();
    }
  }

  startAnimate = () => {
    this.setState(
      { animating: true },
      () => {
        delay(() => {
          window.scrollTo(0, 0);
        }, 400);

        delay(() => {
          this.setState({ animating: false });
        }, 500);
      },
    );
  }

  render() {
    return (
      <Animated
        styleName="root"
        isVisible={this.state.animating}
        animationIn="fadeInDown"
        animationOut="fadeOutDownSmall"
        duration={{
          in: 350,
          out: 350,
        }}
      />
    );
  }
}

SimpleAnimationPage.propTypes = {
  location: PropTypes.object,
};

export default withRouter(CSSModules(SimpleAnimationPage, styles));
