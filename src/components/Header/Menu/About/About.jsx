import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import MenuParagraph from '_components/AnimationWrapper/MenuParagraph';
import Text from '_components/Text';
import Button from '_components/Button';
import styles from './About.scss';

import content from './content';

const About = ({ activeMenu, pageAnimation }) => (
  <div>
    <MenuParagraph
      pageAnimation={pageAnimation}
      isVisible={activeMenu}
      delayIn={500}
    >
      <Text
        styleName="header"
        tag="h6"
        size="normal"
        fontWeight="semi-bold"
        letterSpacingSize="big"
        color="black"
      >
        {content.title}
      </Text>
    </MenuParagraph>
    <MenuParagraph
      pageAnimation={pageAnimation}
      isVisible={activeMenu}
      delayIn={550}
    >
      <Text
        tag="p"
        size="normal"
        fontWeight="normal"
        color="black"
      >
        {content.text}
        <Button
          href={content.link}
          target="blank"
        > {content.linkTitle}
        </Button>
      </Text>
    </MenuParagraph>
  </div>
);

About.propTypes = {
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
};

export default CSSModules(About, styles);
