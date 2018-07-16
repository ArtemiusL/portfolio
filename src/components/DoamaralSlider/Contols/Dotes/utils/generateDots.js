const generateDots = (slidesCount) => {
  let dotsList = [];

  for (let i = 0; i <= slidesCount - 1; i += 1) {
    dotsList = [
      ...dotsList,
      {
        id: i,
        position: i,
      },
    ];
  }

  return dotsList;
};

export default generateDots;
