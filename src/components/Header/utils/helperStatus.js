export const getFilterStatus = (filter, menu) => {
  if (filter && !menu) {
    return 'active';
  }

  if (!filter && menu) {
    return 'hidden';
  }

  return '';
};

export const getMenuStatus = (filter, menu) => {
  if (!filter && menu) {
    return 'active';
  }

  if (filter && !menu) {
    return 'hidden';
  }

  return '';
};
