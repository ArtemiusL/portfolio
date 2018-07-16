import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import SmallArrow from '_components/SvgIcons/SmallArrow';
import Button from '_components/Button';
import Text from '_components/Text';

import styles from './ArrowButton.scss';

const ArrowButton = ({ link, title }) => (
  <Button to={link} styleName="root" hover="opacity">
    <SmallArrow
      styleName="arrow"
      theme="white"
      duration="left"
    />
    <Text
      size="medium-xl"
      fontWeight="semi-bold"
      color="white"
    >
      {title}
    </Text>
  </Button>
);

ArrowButton.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default CSSModules(ArrowButton, styles);
