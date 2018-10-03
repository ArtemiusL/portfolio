/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Text from '_components/Text';

import styles from './SocialLinks.scss';

const content = [
  'vkontakte',
  'telegram',
  'email',
  'phone',
];

const SocialLinks = ({
  className,
  children,
  ...props
}) => {
  const handleClick = (evt) => { console.log(evt.target) }

  return (
    <div className={className} styleName="root">
      {content.map(item => (
        <Text key={item} size="small-not-rem">
          {item}
        </Text>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

SocialLinks.defaultProps = {
  type: 'button',
};

export default CSSModules(SocialLinks, styles);
