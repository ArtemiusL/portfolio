import { RouterTransitionGroup } from '_components/ReactTransitionGroup';
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import checkDevice from '_utils/checkDevice';

import SimpleAnimationPage from '_components/SimpleAnimationPage';
import Header from '_components/Header';
import Footer from '_components/Footer';

import {
  MOBILE,
  DESKTOP,
  MOBILE_MEDIA_QUERY,
  PAGE_TRANSITION,
} from '_constants';

import { switchViewport } from '_actions/common';
import '_styles/styles.scss';

import GridHelper from '_components/Grid/GridHelper';
// import RemSize from '_components/RemSize';

const getViewport = matches => (matches ? MOBILE : DESKTOP);

@connect(null, { onSwitchViewport: switchViewport })

class App extends Component {
  componentDidMount() {
    const { onSwitchViewport } = this.props;
    const mediaQueryList = window.matchMedia(MOBILE_MEDIA_QUERY);
    const currentViewport = getViewport(mediaQueryList.matches);

    onSwitchViewport(currentViewport);

    mediaQueryList.addListener(({ matches }) => {
      const viewport = getViewport(matches);
      onSwitchViewport(viewport);
    });

    if (!checkDevice()) {
      document.body.classList.add('noDevice');
    }
  }

  render() {
    const { route } = this.props;

    return (
      <Fragment>
        <GridHelper />
        <Header />
        <SimpleAnimationPage />
        <RouterTransitionGroup routes={route.routes} timeout={PAGE_TRANSITION} />
        {/* <RemSize /> */}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  route: PropTypes.object,
  onSwitchViewport: PropTypes.func,
};

export default hot(module)(App);
