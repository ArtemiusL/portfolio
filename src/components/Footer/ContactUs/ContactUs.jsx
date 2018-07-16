import React from 'react';
// import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { CONTACT_EMAIL } from '_constants';

import Button from '_components/Button';
import Text from '_components/Text';

import styles from './ContactUs.scss';

const Contact = () => (
  <Button href={`mailto:${CONTACT_EMAIL}`} styleName="root">
    <Text
      tag="span"
      size="normal"
      fontWeight="semi-bold"
      letterSpacing="big"
      color="white"
      border="white"
      hover="black"
    >
      Contact Us
    </Text>
  </Button>
);

export default CSSModules(Contact, styles);
