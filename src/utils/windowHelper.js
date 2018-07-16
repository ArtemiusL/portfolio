const HTML = !__SERVER__ && document.documentElement;

export const getWindowWidth = () => (
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
);

export const setWindowFontSize = (size) => {
  HTML.style.fontSize = `${size}px`;
};
