import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import Animated from '_components/Animated';

class WeypointAnimate extends Component {
  state = { isVisible: false }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (window.pageYOffset !== 0) {
      this.animated = false;
    }
  }

  animated = true;

  handleScroll = () => {
    if (window.pageYOffset === 0 && !this.animated) {
      this.animated = true;
    }
  }

  _handleWaypointEnter = () => {
    if (this.animated) {
      this.setState({ isVisible: true });
    }
  }

  render() {
    const { isVisible } = this.state;
    const { children, ...otherProps } = this.props;

    return (
      <Waypoint
        scrollableAncestor={!__SERVER__ ? window : null}
        topOffset={200}
        onEnter={this._handleWaypointEnter}
      >
        <Animated
          {...otherProps}
          isVisible={isVisible}
        >
          {children}
        </Animated>
      </Waypoint>
    );
  }
}

WeypointAnimate.propTypes = {
  children: PropTypes.any,
};

export default WeypointAnimate;
