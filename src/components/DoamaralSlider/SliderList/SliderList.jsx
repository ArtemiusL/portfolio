import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './SliderList.scss';

class SliderList extends PureComponent {
  componentDidMount() {
    this.props.onSetSlidesCount(this.props.slides.length);
  }

  createSlide = (slideElement, i) => {
    const { currentSlide } = this.props;

    return (
      <li
        key={`DoamaralSlider-${i}`} // eslint-disable-line
        styleName={
          `slide ${currentSlide < i ? 'nextSlide' : ''}
          ${currentSlide > i ? 'prevSlide' : ''}
          ${currentSlide === i ? 'currentSlide' : ''}`
        }
      >
        {slideElement}
      </li>
    );
  }

  render() {
    const { slides, className } = this.props;
    const sliderList = slides.map(this.createSlide);
    return (
      <ul styleName="root" className={className}>
        {sliderList}
      </ul>
    );
  }
}

SliderList.propTypes = {
  slides: PropTypes.any,
  currentSlide: PropTypes.number,
  onSetSlidesCount: PropTypes.func,
  className: PropTypes.string,
};

export default CSSModules(SliderList, styles, { allowMultiple: true });
