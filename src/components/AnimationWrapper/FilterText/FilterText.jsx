import React from 'react';
import PropTypes from 'prop-types';

import Animated from '_components/Animated';

const FilterText = ({ isVisible, delayIn, children }) => (
  <Animated
    animateOnMount
    isVisible={isVisible}
    animationIn="fadeInUp"
    animationOut="fadeOutDown"
    easingShape="cubic-bezier(0.215, 0.61, 0.355, 1)"
    duration={350}
    delay={{
      in: delayIn,
      out: 0,
    }}
  >
    {children}
  </Animated>
);

FilterText.propTypes = {
  children: PropTypes.any,
  isVisible: PropTypes.bool,
  delayIn: PropTypes.number,
};

export default FilterText;
