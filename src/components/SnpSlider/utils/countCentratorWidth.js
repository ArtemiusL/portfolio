const countCentratorWidth = (innerBlock, child, separate) => {
  if (!(innerBlock && child && separate)) return null;

  const windowW = window.innerWidth;
  const innerBlockCW = innerBlock.clientWidth;
  const childCW = child.clientWidth;
  const separateCW = separate.clientWidth;

  const centratorWidth = `${100 * ((innerBlockCW -
    (childCW + separateCW)) / (2 * windowW))}vw`;

  return centratorWidth;
};

export default countCentratorWidth;
