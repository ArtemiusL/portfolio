import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import MenuParagraph from '_components/AnimationWrapper/MenuParagraph';
import Button from '_components/Button';
import Text from '_components/Text';

import styles from './SocialLinks.scss';

import content from './content';

const SocialLinks = ({ theme, activeMenu, pageAnimation }) => {
  const createSocialLink = (social, i) => (
    <li key={social.title} styleName="item">
      <MenuParagraph
        pageAnimation={pageAnimation}
        isVisible={activeMenu}
        delayIn={600 + (i * 50)}
      >
        <Button herf={social.link}>
          <Text
            tag="span"
            size="normal"
            fontWeight="medium"
            color={theme}
            hover="black"
          >
            {social.title}
          </Text>
        </Button>
      </MenuParagraph>
    </li>
  );

  const socialLinks = content.map(createSocialLink);

  return (
    <ul styleName="root">
      {socialLinks}
    </ul>
  );
};

SocialLinks.propTypes = {
  theme: PropTypes.oneOf(['black', 'white']),
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
};

SocialLinks.defaultProps = {
  theme: 'black',
  activeMenu: true,
};

export default CSSModules(SocialLinks, styles);
