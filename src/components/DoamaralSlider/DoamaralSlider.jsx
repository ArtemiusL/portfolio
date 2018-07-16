/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { keyCodes } from '_constants';

import SlidesList from './SliderList';
import Dotes from './Contols/Dotes';
import Picker from './Contols/Picker';
import Arrow from './Contols/Arrow';

import delay from 'lodash/delay';

const SLiderContext = React.createContext();

export class Slider extends PureComponent {
  state = {
    currentSlide: 0,
    slidesCount: 0,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey, false);
  }

  handleKey = (e) => {
    if (e.keyCode === keyCodes.UP) {
      e.preventDefault();
      this.handlePrevClick();
    }

    if (e.keyCode === keyCodes.DOWN) {
      e.preventDefault();
      this.handleNextClick();
    }
  }

  setAnimated = () => {
    this.animated = true;
    delay(() => {
      this.animated = false;
    }, 800);
  }

  handleNextClick = () => {
    const { currentSlide, slidesCount } = this.state;
    if (currentSlide !== (slidesCount - 1)) {
      if (!this.animated) {
        this.setState({ currentSlide: currentSlide + 1 }, this.setAnimated);
      }
    }
  }

  handlePrevClick = () => {
    const { currentSlide } = this.state;
    if (currentSlide !== 0) {
      if (!this.animated) {
        this.setState({ currentSlide: currentSlide - 1 }, this.setAnimated);
      }
    }
  }

  handelChangeSlide = (currentSlide) => {
    this.setState({ currentSlide });
  }

  handleSetSlidesCount = (slidesCount) => {
    this.setState({ slidesCount });
  }

  getDisableType = () => {
    const { currentSlide, slidesCount } = this.state
    if (currentSlide === 0) {
      return 'prev'
    }

     if (currentSlide === (slidesCount - 1)) {
      return 'next'
    }

    return '';
  }

  render() {
    return (
      <SLiderContext.Provider
        value={{
          state: this.state,
          onNextClick: this.handleNextClick,
          onPrevClick: this.handlePrevClick,
          onSetSlide: this.handelChangeSlide,
          onSlidesCount: this.handleSetSlidesCount,
          disableType: this.getDisableType(),
        }}
      >
        {this.props.children}
      </SLiderContext.Provider>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.any,
};

export const DotesSlider = ({
  classActiveDote,
  classDotButton,
  classDotList,
  classDot,
}) => (
  <SLiderContext.Consumer>
    {
      (context) => (
        <Dotes
          slidesCount={context.state.slidesCount}
          currentSlide={context.state.currentSlide}
          onClickDote={context.onSetSlide}
          classActiveDote={classActiveDote}
          classDotButton={classDotButton}
          classDotList={classDotList}
          classDot={classDot}
        />
      )
    }
  </SLiderContext.Consumer>
);

DotesSlider.propTypes = {
  classActiveDote: PropTypes.string,
  classDotButton: PropTypes.string,
  classDotList: PropTypes.string,
  classDot: PropTypes.string,
};


export const SlidesListContext = ({
  children,
  className,
}) => (
  <SLiderContext.Consumer>
    {
      (context) => (
        <SlidesList
          slides={children}
          currentSlide={context.state.currentSlide}
          onSetSlidesCount={context.onSlidesCount}
          className={className}
        />
      )
    }
  </SLiderContext.Consumer>
);

SlidesListContext.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};


export const PickerSlider = ({
  classPickerList,
  classActiveDote,
  classMaxCount,
  classDot,
  separate,
}) => (
  <SLiderContext.Consumer>
    {
      (context) => (
        <Picker
          classPickerList={classPickerList}
          classActiveDote={classActiveDote}
          classDot={classDot}
          classMaxCount={classMaxCount}
          slidesCount={context.state.slidesCount}
          currentSlide={context.state.currentSlide}
          separate={separate}
        />
      )
    }
  </SLiderContext.Consumer>
);

PickerSlider.propTypes = {
  classPickerList: PropTypes.string,
  classActiveDote: PropTypes.string,
  classMaxCount: PropTypes.string,
  classDot: PropTypes.string,
  separate: PropTypes.any,
};

export const ArrowSlider = ({
  children,
  type,
  className,
  classNameDisabled,
}) => (
  <SLiderContext.Consumer>
    {
      (context) => (
        <Arrow
          onNextClick={context.onNextClick}
          onPrevClick={context.onPrevClick}
          disableType={context.disableType}
          type={type}
          className={className}
          classNameDisabled={classNameDisabled}
        >
          {children}
        </Arrow>
      )
    }
  </SLiderContext.Consumer>
);

ArrowSlider.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  classNameDisabled: PropTypes.string,
};
