import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Button from '_components/Button';
import Text from '_components/Text';

import styles from './Footer.scss';

const Footer = (props) => {
  const { navigation } = props;

  const createNav = nav => (
    <div key={nav.link}>
      <Button to={nav.link}>
        <Text
          tag="span"
          size="normal"
          fontWeight="semi-bold"
          letterSpacingSize="big"
          color="white"
          hover="black"
        >
          {nav.title}
        </Text>
      </Button>
    </div>
  );

  const navList = navigation.map(createNav);

  return (
    <div styleName="root">
      {navList}
    </div>
  );
};

Footer.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default CSSModules(Footer, styles);
