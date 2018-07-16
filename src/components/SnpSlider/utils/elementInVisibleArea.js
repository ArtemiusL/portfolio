const elementInVisibleArea = (innerBlock, childs) => {
  const { left, right } = innerBlock.getBoundingClientRect();

  Object.keys(childs).forEach((id) => {
    const el = childs[id];

    el.classList.add('visiblearea');

    const { left: leftEl, right: rightEl } = el.getBoundingClientRect();

    if (leftEl >= left && rightEl <= right) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

export default elementInVisibleArea;
