import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import addZero from 'add-zero';

import generatePicker from './utils/generatePicker';

import styles from './Picker.scss';

class Picker extends PureComponent {
  constructor(props) {
    super(props);

    this.cardNodes = {
      byId: {},
    };
  }

  getTrnsformPosition = () => {
    const { currentSlide } = this.props;

    const findElement = this.cardNodes.byId[currentSlide];
    return findElement.offsetTop;
  }

  createPicker = (el) => {
    const { classActiveDote, currentSlide, classDot } = this.props;
    const activeClass = el.id === currentSlide ? classActiveDote : '';

    return (
      <li
        key={el.id}
        ref={this.handleRefItem.bind(this, el.id)}
        className={`${classDot || ''} ${activeClass || ''}`}
      >
        {el.title}
      </li>
    );
  };

  handleRefItem = (id, node) => {
    this.cardNodes.byId[id] = node;
  }

  render() {
    const {
      classPickerList,
      classMaxCount,
      slidesCount,
      separate,
      classDot,
    } = this.props;

    const dots = generatePicker(slidesCount);
    const pickerList = dots.map(this.createPicker);
    const maxSlides = slidesCount;

    const elementsExists = this.cardNodes.byId[0] !== undefined;
    const styleTransformList = {
      transform: `translate3d(0, -${elementsExists ? this.getTrnsformPosition() : 0}px, 0)`,
    };

    return (
      <div styleName="root">
        <div styleName="pickerWrapp">
          <ul
            style={styleTransformList}
            styleName="pickerList"
            className={classPickerList || ''}
          >
            {pickerList}
          </ul>
          <ul styleName="hidden" className={classPickerList || ''}>
            <li className={classDot || ''}>
              {addZero(maxSlides)}
            </li>
          </ul>
        </div>
        {separate}
        <div>
          <span className={classMaxCount || ''}>
            {addZero(maxSlides)}
          </span>
        </div>
      </div>
    );
  }
}

Picker.propTypes = {
  slidesCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  classPickerList: PropTypes.string,
  classActiveDote: PropTypes.string,
  classMaxCount: PropTypes.string,
  classDot: PropTypes.string,
  separate: PropTypes.any,
};

export default CSSModules(Picker, styles);
