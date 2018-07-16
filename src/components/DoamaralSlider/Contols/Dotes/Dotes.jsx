import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import generateDots from './utils/generateDots';

import styles from './Dotes.scss';

const Dotes = ({
  onClickDote,
  slidesCount,
  currentSlide,
  classDotList,
  classActiveDote,
  classDotButton,
  classDot,
}) => {
  const createDote = (el) => {
    const hendleClick = () => onClickDote(el.id);

    const activeClass = el.id === currentSlide ? classActiveDote : '';

    return (
      <li
        className={`${classDot || ''} ${activeClass || ''}`}
        key={el.id}
      >
        <button
          styleName="button"
          className={classDotButton || ''}
          onClick={hendleClick}
        />
      </li>
    );
  };

  const dots = generateDots(slidesCount);
  const dotsList = dots.map(createDote);

  return (
    <ul className={classDotList}>
      {dotsList}
    </ul>
  );
};

Dotes.propTypes = {
  slidesCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  classDotList: PropTypes.string,
  classActiveDote: PropTypes.string,
  classDotButton: PropTypes.string,
  classDot: PropTypes.string,
  onClickDote: PropTypes.func,
};

export default CSSModules(Dotes, styles);
