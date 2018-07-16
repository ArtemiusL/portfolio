import addZero from 'add-zero';

const generatePicker = (slidesCount) => {
  let dotsList = [];

  for (let i = 0; i <= slidesCount - 1; i += 1) {
    dotsList = [
      ...dotsList,
      {
        id: i,
        position: i,
        title: addZero(i + 1),
      },
    ];
  }

  return dotsList;
};

export default generatePicker;
