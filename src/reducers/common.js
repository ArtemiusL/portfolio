import {
  APP_LOADED,
  SWITCH_VIEWPORT,
  FIRST_LOAD_ANIMATED,
} from '_actionConstants/common';
import { DESKTOP } from '_constants';

const initialState = {
  viewport: DESKTOP,
  isAppLoaded: false,
  isFirstLoadAnimating: false,
};

const common = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_VIEWPORT:
      return { ...state, ...payload };

    case APP_LOADED:
      return { ...state, isAppLoaded: true, isFirstLoadAnimating: true };

    case FIRST_LOAD_ANIMATED:
      return { ...state, isFirstLoadAnimating: false };

    default:
      return state;
  }
};

export default common;
