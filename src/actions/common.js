import {
  APP_LOADED,
  SWITCH_VIEWPORT,
  FIRST_LOAD_ANIMATED,
} from './constants/common';

export const switchViewport = viewport => ({
  type: SWITCH_VIEWPORT,
  payload: { viewport },
});

export const appLoaded = () => ({
  type: APP_LOADED,
});

export const firstLoadAnimated = () => ({
  type: FIRST_LOAD_ANIMATED,
});
