import React from 'react';
import PropTypes from 'prop-types';

import viewport from '_hocs/viewport';

import { GridHelper as DesktopGridHelper } from '_components/Grid/desktop';
import { GridHelper as MobileGridHelper } from '_components/Grid/mobile';

const GridHelper = ({ isDesktop }) => (isDesktop ? <DesktopGridHelper /> : <MobileGridHelper />);

GridHelper.propTypes = {
  isDesktop: PropTypes.bool,
};

export default viewport(GridHelper);
