import { createSelector } from 'reselect';
import { MOBILE, DESKTOP } from '_constants';
import rootSelector from './root';

export const commonSelector = createSelector(
  rootSelector,
  ({ common }) => common,
);

export const viewportSelector = createSelector(
  commonSelector,
  ({ viewport }) => viewport,
);

export const isMobileSelector = createSelector(
  viewportSelector,
  viewport => viewport === MOBILE,
);

export const isDesktopSelector = createSelector(
  viewportSelector,
  viewport => viewport === DESKTOP,
);

export const isAppLoadedSelector = createSelector(
  commonSelector,
  ({ isAppLoaded }) => isAppLoaded,
);

export const isFirstLoadAnimatingSelector = createSelector(
  commonSelector,
  ({ isFirstLoadAnimating }) => isFirstLoadAnimating,
);
