import { getWindowWidth, setWindowFontSize } from '_utils/windowHelper';

import {
  DEFAULT_TABLET_SIZE,
  DEFAULT_MOBILE_SIZE,
  DEFAULT_FONT_SIZE,

  MAX_DESKTOP_WIDTH,
  MAX_TABLET_WIDTH,
  MAX_MOBILE_WIDTH,

  DESKTOP,
  TABLET,
  MOBILE,
} from '_constants';

export const getDefaultFontSize = (device) => {
  switch (device) {
    case TABLET:
      return DEFAULT_TABLET_SIZE;

    case MOBILE:
      return DEFAULT_MOBILE_SIZE;

    default:
      return DEFAULT_FONT_SIZE;
  }
};

export const getCurrentFontSize = (wWidth, device) => {
  const fontSize = getDefaultFontSize(device);
  return (wWidth / fontSize).toFixed(0);
};

export const getDevice = (wWidth) => {
  if (wWidth <= MAX_MOBILE_WIDTH) {
    return MOBILE;
  }

  if (wWidth <= MAX_TABLET_WIDTH) {
    return TABLET;
  }

  if (wWidth <= MAX_DESKTOP_WIDTH) {
    return DESKTOP;
  }

  return null;
};

export const changeWindowSize = () => {
  const wWidth = getWindowWidth();
  const device = getDevice(wWidth);

  return setWindowFontSize(getCurrentFontSize(wWidth, device));
};
