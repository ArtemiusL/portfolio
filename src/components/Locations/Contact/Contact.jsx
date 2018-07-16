import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import MenuParagraph from '_components/AnimationWrapper/MenuParagraph';
import Button from '_components/Button';
import Text from '_components/Text';

import styles from './Contact.scss';

const Contact = ({
  pageAnimation,
  activeMenu,
  location,
  address,
  mail,
  tell,
  theme,
}) => (
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
        color={theme}
      >
        {location}
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
        color={theme}
        html
      >
        {address}
      </Text>
      <Button href={`mailto:${mail}`}>
        <Text
          tag="span"
          size="normal"
          fontWeight="normal"
          color={theme}
        >
          {mail}
        </Text>
      </Button>
      <br />
      <Button href={`tell:${tell}`}>
        <Text
          tag="span"
          size="normal"
          fontWeight="normal"
          color={theme}
        >
          {tell}
        </Text>
      </Button>
    </MenuParagraph>
  </div>
);

Contact.propTypes = {
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  tell: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['black', 'white']),
};

export default CSSModules(Contact, styles);
