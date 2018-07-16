import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  isAppLoadedSelector,
  isFirstLoadAnimatingSelector,
} from '_selectors';

/**
  * {
  *   // Приложение загрузилось
  *   isAppLoaded: PropTypes.bool,
  *
  *   // Проигрывается анимация после того как загрузилось приложение
  *   isFirstLoadAnimating: PropTypes.bool,
  *
  *   // Период между началом загрузки и концом проигрыввания анимации
  *   isFirstLoadAnimation: PropTypes.bool,
  * }
*/

/* eslint-disable react/prop-types */
const firstLoad = WrappedComponent => (props) => {
  const { isAppLoaded, isFirstLoadAnimating } = props;
  const isFirstLoadAnimation = !isAppLoaded || (isAppLoaded && isFirstLoadAnimating);

  return <WrappedComponent {...props} isFirstLoadAnimation={isFirstLoadAnimation} />;
};
/* eslint-enable react/prop-types */

const composedHoc = compose(
  connect(state => ({
    isAppLoaded: isAppLoadedSelector(state),
    isFirstLoadAnimating: isFirstLoadAnimatingSelector(state),
  }), null, null, { pure: false }),
  firstLoad,
);

export default composedHoc;
