import React from 'react';
import PropTypes from 'prop-types';

import Animated from '_components/Animated';

import { PAGE_TRANSITION_FULL } from '_constants';

const getDelayPageStart = delayElement => PAGE_TRANSITION_FULL + delayElement;

const PageLoad = ({
  delayIn,
  animationIn,
  duration,
  children,
}) => (
  <Animated
    animateOnMount
    animationIn={animationIn}
    easingShape="cubic-bezier(0.215, 0.61, 0.355, 1)"
    duration={duration}
    delay={{
      in: getDelayPageStart(delayIn),
      out: 0,
    }}
  >
    {children}
  </Animated>
);

PageLoad.propTypes = {
  children: PropTypes.any,
  animationIn: PropTypes.string,
  delayIn: PropTypes.number,
  duration: PropTypes.number,
};

PageLoad.defaultProps = {
  animationIn: 'fadeInUpSmall',
  duration: 400,
};

export default PageLoad;
