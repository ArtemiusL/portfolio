export default () => {
  const localeState = {};

  if (__SERVER__) {
    return {
      ...localeState,
    };
  }

  return {
    ...window.__INITIAL_STATE__,
  };
};
