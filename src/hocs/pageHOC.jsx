import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import firstLoad from '_hocs/firstLoad';
import withPageConfig from '_hocs/pageConfig';
import { setPageConfig } from '_actions/page';

/**
  * {
  *   _hocs/firstLoad props
  *   _hocs/pageConfig props
  *
  *   // Статус появления/исчезновения страницы
  *   transitionStatus: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited']),
  *
  *   // True, если transitionStatus = entering или entered
  *   isVisiblePage: PropTypes.bool,
  *
  *   // True, если приложение загружено(isAppLoaded) и isVisiblePage true
  *   isVisible: PropTypes.bool
  * }
*/

const pageHOC = PageComponent => (
  class HOC extends Component {
    static propTypes = {
      route: PropTypes.object,
      isAppLoaded: PropTypes.bool,
      isVisiblePage: PropTypes.bool,
      onSetPageConfig: PropTypes.func,
    }

    componentDidMount() {
      const { onSetPageConfig, route } = this.props;

      onSetPageConfig(route.pageConfig);
    }

    render() {
      const { isVisiblePage, isAppLoaded } = this.props;
      const isVisible = isAppLoaded && isVisiblePage;

      return <PageComponent {...this.props} isVisible={isVisible} />;
    }
  }
);

const composedHoc = compose(
  connect(null, { onSetPageConfig: setPageConfig }),
  firstLoad,
  pageHOC,
  withPageConfig,
);

export default composedHoc;
