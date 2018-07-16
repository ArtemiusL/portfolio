import React from 'react';
import PropTypes from 'prop-types';

import Animated from '_components/Animated';

const MenuParagraph = ({
  isVisible,
  delayIn,
  pageAnimation,
  children,
}) => (
  <Animated
    animateOnMount
    isVisible={isVisible}
    animationIn="fadeInDownSmall"
    animationOut={pageAnimation ? 'fadeOutDownSmall' : 'fadeOutUpSmall'}
    duration={pageAnimation ? 350 : 500}
    delay={{
      in: delayIn,
      out: 0,
    }}
  >
    {children}
  </Animated>
);

MenuParagraph.propTypes = {
  children: PropTypes.any,
  isVisible: PropTypes.bool,
  pageAnimation: PropTypes.bool,
  delayIn: PropTypes.number,
};

export default MenuParagraph;
