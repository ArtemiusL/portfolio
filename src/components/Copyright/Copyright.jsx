import React from 'react';
import PropTypes from 'prop-types';

import Text from '_components/Text';

import content from './content';

const Copyright = ({ theme }) => (
  <Text
    tag="span"
    size="small"
    fontWeight="semi-bold"
    pointerEvents="none"
    color={theme}
  >
    {content.copyright}
  </Text>
);

Copyright.propTypes = {
  theme: PropTypes.oneOf(['black', 'white']),
};

Copyright.defaultProps = {
  theme: 'black',
};

export default Copyright;
