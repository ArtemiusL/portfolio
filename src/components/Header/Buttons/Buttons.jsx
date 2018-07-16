import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Animated from '_components/Animated';
import FilterIcon from '_components/Icons/Filter';
import MenuIcon from '_components/Icons/Menu';
import Button from '_components/Button';

import styles from './Buttons.scss';

const Buttons = ({
  visibleFilter,
  onTogleFilter,
  onTogleMenu,
  filterStatus,
  menuStatus,
}) => (
  <div styleName="root">
    <Animated isVisible={visibleFilter && filterStatus !== 'hidden'} duration={500}>
      <Button styleName="button" onClick={onTogleFilter} >
        <FilterIcon status={filterStatus} />
      </Button>
    </Animated>

    <Animated isVisible={menuStatus !== 'hidden'} duration={500}>
      <Button styleName="button" onClick={onTogleMenu} >
        <MenuIcon status={menuStatus} />
      </Button>
    </Animated>
  </div>
);

Buttons.propTypes = {
  onTogleFilter: PropTypes.func.isRequired,
  onTogleMenu: PropTypes.func.isRequired,
  filterStatus: PropTypes.string,
  menuStatus: PropTypes.string,
  visibleFilter: PropTypes.bool,
};

export default CSSModules(Buttons, styles, { allowMultiple: true });
