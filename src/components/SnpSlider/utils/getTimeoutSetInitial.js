const getTimeoutSetInitial = (innerBlock, child, separate) => {
  const innerBlockCW = innerBlock.clientWidth;
  const childCW = child.clientWidth;
  const separateCW = separate.clientWidth;

  return (
    innerBlockCW === childCW && childCW === separateCW
  ) ? 300 : 0;
};

export default getTimeoutSetInitial;
