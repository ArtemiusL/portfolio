import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import Footer from './Footer';

import content from './content';

const Navigation = ({ type, activeMenu, pageAnimation }) => {
  const { navigation } = content;
  return type === 'menu' ? (
    <Menu
      navigation={navigation}
      activeMenu={activeMenu}
      pageAnimation={pageAnimation}
    />
  ) : (
    <Footer navigation={navigation} />
  );
};

Navigation.propTypes = {
  type: PropTypes.oneOf(['menu', 'footer']),
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
};

export default Navigation;
