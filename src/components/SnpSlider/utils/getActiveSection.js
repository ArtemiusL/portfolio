const getActiveSection = (currentElement, elements, windowIndent, callback) => {
  const offset = currentElement.scrollLeft;
  const center = offset + windowIndent;

  Object.keys(elements).forEach((id) => {
    const el = elements[id];

    const elementRight = el.clientWidth + el.offsetLeft;

    const offsetMoreElement = center > el.offsetLeft;
    const elementBottomMoreOffset = elementRight > center;

    if (offsetMoreElement && elementBottomMoreOffset) {
      callback(Number(id));
    }
  });
};

export default getActiveSection;
