import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

import ReactTransition from '_components/ReactTransitionGroup/ReactTransition';
import MenuParagraph from '_components/AnimationWrapper/MenuParagraph';
import Animated from '_components/Animated';

import SocialLinks from '_components/SocialLinks';
import Navigation from '_components/Navigation';
import Locations from '_components/Locations';
import Copyright from '_components/Copyright';
import About from './About';

import styles from './Menu.scss';

const Menu = ({ activeMenu, pageAnimation }) => (
  <ReactTransition
    isVisible={activeMenu}
    timeout={1000}
    unmountOnExit
  >
    <Animated
      isVisible={activeMenu}
      animationIn="slideInDown"
      animationOut={!pageAnimation ? 'slideOutUp' : 'slideOutDown'}
      easingShape="cubic-bezier(0.215, 0.61, 0.355, 1)"
      duration={!pageAnimation ? 400 : 300}
      delay={{
        in: 0,
        out: !pageAnimation ? 700 : 550,
      }}
      styleName="root"
    >
      <Grid>
        <GridRow fullWindow rows={2} />
        <GridRow fullWindow rows={2}>
          <GridColumn columns={12} position="left center">
            <Navigation
              type="menu"
              activeMenu={activeMenu}
              pageAnimation={pageAnimation}
            />
          </GridColumn>
        </GridRow>
        <GridRow fullWindow />
        <GridRow fullWindow>
          <GridColumn columns={2} />
          <GridColumn columns={2}>
            <About
              activeMenu={activeMenu}
              pageAnimation={pageAnimation}
            />
          </GridColumn>
          <GridColumn columns={3} />
          <GridColumn columns={3} position="between top">
            <Locations
              activeMenu={activeMenu}
              pageAnimation={pageAnimation}
            />
          </GridColumn>
          <GridColumn columns={2} />
        </GridRow>
        <GridRow fullWindow rows={2}>
          <GridColumn columns={2} position="left bottom">
            <MenuParagraph
              pageAnimation={pageAnimation}
              isVisible={activeMenu}
              delayIn={600}
            >
              <Copyright />
            </MenuParagraph>
          </GridColumn>
          <GridColumn columns={6} />
          <GridColumn columns={4} position="right bottom">
            <SocialLinks
              pageAnimation={pageAnimation}
              activeMenu={activeMenu}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Animated>
  </ReactTransition>
);

Menu.propTypes = {
  activeMenu: PropTypes.bool.isRequired,
  pageAnimation: PropTypes.bool.isRequired,
};

export default CSSModules(Menu, styles);
