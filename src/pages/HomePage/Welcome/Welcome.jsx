/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import PageLoad from '_components/AnimationWrapper/PageLoad';
import Text from '_components/Text';

import mePhoto from '_images/me@2x.png';

import styles from './Welcome.scss';

const Welcome = ({
  className,
}) => (
  <div className={className} styleName="root">
      <PageLoad delayIn={400}>
        <img src={mePhoto} height="90%" alt="Artem Konovalov" />
      </PageLoad>
      <div styleName="content">
        <PageLoad delayIn={300} animationIn="fadeInDownSmall">
          <div styleName="title">
            <Text
              color="white"
              tag="h1"
              fontSize="113px"
              fontWeight="bold"
              letterSpacing="-0.25px"
              textTransform="uppercase"
            >
              Artem
            </Text>
            <Text
              color="white"
              tag="h1"
              fontSize="100px"
              fontWeight="bold"
              letterSpacing="-0.65px"
              textTransform="uppercase"
            >
              Konovalov
            </Text>
          </div>
        </PageLoad>
        <PageLoad delayIn={350}>
          <Text
            color="white"
            tag="h2"
            fontSize="33px"
            fontWeight="medium"
            opacity="half"
          >
            Я  front-end разработчик!
          </Text>
        </PageLoad>
      </div>
      <div styleName="footerGradient" />
  </div>
);

Welcome.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Welcome, styles);
