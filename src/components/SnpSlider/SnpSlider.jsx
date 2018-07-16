import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import delay from 'lodash/delay';

import isEmpty from './utils/isObjEmpty';
// import getActiveSection from './utils/getActiveSection';
import animatedScrollTo from './utils/animatedScroll';
import countCentratorWidth from './utils/countCentratorWidth';
import getTimeoutSetInitial from './utils/getTimeoutSetInitial';
import elementInVisibleArea from './utils/elementInVisibleArea';

import Controls from './Controls';
import Slides from './Slides';

import styles from './SnpSlider.scss';

let maxValueControls = 0;

@CSSModules(styles, { allowMultiple: true })
class SnpSlider extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    multislider: PropTypes.bool,
    edgePadding: PropTypes.bool,
    controlsClassName: PropTypes.string,
    controlsTextClassName: PropTypes.string,
    separatorClassName: PropTypes.string,
    wrapperStyle: PropTypes.shape({}),
    centerMode: PropTypes.bool,
    noControls: PropTypes.bool,
    inVisabilitiArea: PropTypes.bool,
    withBorders: PropTypes.bool,
    defaultPosition: PropTypes.oneOf(['center', 'left']),
    disableOnSlide: PropTypes.bool,
    defaultSlide: PropTypes.number,
  };

  static defaultProps = {
    multislider: false,
    centerMode: false,
    edgePadding: false,
    wrapperStyle: {},
    noControls: false,
    inVisabilitiArea: false,
    defaultPosition: 'left',
    withBorders: false,
    disableOnSlide: true,
  };

  state = {
    noControls: this.props.noControls,
    currentNumber: 0,
    centratorWidth: 0,
    wrapperStyle: this.props.wrapperStyle,
    edgePadding: false,
    position: 0,
  };

  componentDidMount() {
    this.innerBlock.addEventListener('scroll', this.handleScroll, false);
    window.addEventListener('resize', this.countWrapperStyle, false);
    window.addEventListener('resize', this.handleResize, false);

    const { centerMode } = this.props;
    if (!(this.innerBlock && this.child && this.separate)) return;

    const timeout = getTimeoutSetInitial(
      this.innerBlock,
      this.child,
      this.separate,
    );

    if (centerMode) {
      delay(() => { // eslint-disable-line
        const centratorWidth = countCentratorWidth(
          this.innerBlock,
          this.child,
          this.separate,
        );
        this.setState({ centratorWidth });
      }, timeout);
    }

    delay(() => this.countWrapperStyle(), timeout); // eslint-disable-line

    if (this.props.defaultPosition === 'center') {
      delay(() => { // eslint-disable-line
        const { scrollWidth, clientWidth } = this.innerBlock;
        const halfScroll = scrollWidth / 2;
        const halfWidth = clientWidth / 2;
        this.innerBlock.scrollLeft = halfScroll - halfWidth;
      }, timeout);
    }

    if (this.props.defaultSlide) {
      const defaultSlide = this._nodes[this.props.defaultSlide + 1];
      const halfParrent = this.innerBlock.clientWidth / 2;
      this.innerBlock.scrollLeft = defaultSlide.offsetLeft - halfParrent;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.centerMode && this.props.centerMode) {
      this.setState({  // eslint-disable-line
        centratorWidth: countCentratorWidth(
          this.innerBlock,
          this.child,
          this.separate,
        ),
      });
    }

    if (prevProps.centerMode && !this.props.centerMode) {
      this.setState({ centratorWidth: 0 }) // eslint-disable-line
    }

    if (prevState.currentNumber >= this.props.children.length) {
      this.setState({ // eslint-disable-line
        currentNumber: this.props.children.length - 1,
      });
    }

    if (this.props.inVisabilitiArea) {
      elementInVisibleArea(this.innerBlock, this._nodes);
    }
  }

  componentWillUnmount() {
    this.innerBlock.removeEventListener('resize', this.handleScroll, false);
    window.removeEventListener('resize', this.countWrapperStyle, false);
    window.removeEventListener('resize', this.handleResize, false);
  }

  setActive = (id) => {
    if (this.state.currentNumber !== id && !this.slides) {
      this.setState({
        currentNumber: id,
      });
    }
  };

  isScrolled = false;

  innerBlockRef = (el) => {
    this.innerBlock = el;
  };

  rulerRef = (el) => {
    this.ruler = el;
  };

  separatorRef = (el) => {
    this.separate = el;
  };

  measureRef = (el) => {
    this.measure = el;
  };

  countWrapperStyle = () => {
    const { wrapperStyle } = this.props;

    if (isEmpty(wrapperStyle)) {
      return this.setState({
        noControls: false,
      });
    }

    const rulerWidth = this.ruler.clientWidth;
    const innerBlockSW = this.innerBlock.scrollWidth;

    if (innerBlockSW <= rulerWidth) {
      return this.setState({
        wrapperStyle,
        noControls: true,
        edgePadding: false,
      });
    }

    if (innerBlockSW > rulerWidth && innerBlockSW <= window.innerWidth) {
      return this.setState({
        wrapperStyle: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        },
        noControls: true,
        edgePadding: false,
      });
    }

    return this.setState({
      wrapperStyle: {
        width: '100%',
      },
      noControls: false,
      edgePadding: true,
    });
  };

  countScroll = (slideNum) => {
    this.setState({ currentNumber: slideNum });
    const centrator = this.centrator ? this.centrator.clientWidth : 0;
    const currentClientWidth = this._nodes[slideNum].offsetLeft - centrator;

    return currentClientWidth;
  };

  toSlide = (slideNum) => {
    this.isScrolled = true;
    const { currentNumber } = this.state;
    const slidesAmount = Math.abs(currentNumber - slideNum);

    animatedScrollTo(
      this.innerBlock,
      this.countScroll(slideNum),
      slidesAmount <= 2 ? 200 : slidesAmount * 63,
      'linear',
      () => { this.isScrolled = false; this.slides = false; },
    );
  };

  handleScroll = () => {
    if (this.isScrolled || this.slides) return null;

    // const indent = this.props.multislider && !this.props.centerMode ?
    //   this.child.clientWidth / 2 :
    //   this.innerBlock.clientWidth / 2;

    // getActiveSection(this.innerBlock, this._nodes, indent, this.setActive);

    if (this.props.inVisabilitiArea) {
      elementInVisibleArea(this.innerBlock, this._nodes);
    }

    this.setState({ position: this.innerBlock.scrollLeft });

    return null;
  };

  handleMouseDown = (e) => {
    this.prevValue = e.clientX;
    this.mouseDown = true;
  };

  handleMouseMove = (e) => {
    const { multislider, disableOnSlide } = this.props;

    if (this.mouseDown) {
      e.preventDefault();
      if (!disableOnSlide) {
        this.innerBlock.classList.add(styles.active);
      }

      if (!multislider && !this.prevCurrent) {
        this.prevCurrent = this.state.currentNumber;
      }

      this.innerBlock.scrollLeft = this.innerBlock.scrollLeft - (e.clientX - this.prevValue);

      this.prevValue = e.clientX;
      if (!multislider) {
        if (!this.slides) {
          if (e.clientX - this.prevValue > 20) {
            this.slides = true;
            this.prev();
            return null;
          }

          if (e.clientX - this.prevValue < -20) {
            this.slides = true;
            this.next();
            return null;
          }
        }
      }
    }
    return null;
  };

  handleMouseUp = (e) => {
    const { multislider, disableOnSlide } = this.props;
    e.preventDefault();
    if (!disableOnSlide) {
      this.innerBlock.classList.remove(styles.active);
    }

    this.mouseDown = false;
    if (!multislider) {
      if (!this.slides) {
        this.isScrolled = true;
        animatedScrollTo(
          this.innerBlock,
          this.countScroll(this.state.currentNumber),
          200,
          'linear',
          () => { this.isScrolled = false; this.slides = false; },
        );
      }
    }

    this.prevCurrent = null;
  };

  handleChengePosition = (value) => {
    this.innerBlock.scrollLeft = value;
  }

  handleResize = () => {
    const { multislider } = this.props;
    const { currentNumber } = this.state;

    if (!multislider && currentNumber !== 0) {
      this.isScrolled = true;
      animatedScrollTo(
        this.innerBlock,
        this.countScroll(currentNumber),
        200,
        'linear',
        () => { this.isScrolled = false; this.slides = false; },
      );
    }
  }

  _nodes = {};

  createNodes = (node, id) => {
    this.child = node;
    this._nodes = {
      ...this._nodes,
      [id]: node,
    };
  };

  createCentratorRef = (node) => {
    this.centrator = node;
  };

  render() {
    const {
      controlsTextClassName,
      controlsClassName,
      wrapperStyle,
      centerMode,
      className,
    } = this.props;

    const {
      wrapperStyle: stateWrapperStyle,
      centratorWidth,
      position,
    } = this.state;

    if (this.innerBlock) {
      const { scrollWidth, clientWidth } = this.innerBlock;
      maxValueControls = scrollWidth - clientWidth;
    }

    const showControls = this.innerBlock && !this.state.noControls && !this.props.noControls;

    return (
      <React.Fragment>
        <div ref={this.rulerRef} style={wrapperStyle} />
        <div
          className={className}
          styleName="root"
          style={stateWrapperStyle}
        >
          <div
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseUp}
            ref={this.innerBlockRef}
            styleName="innerBlock"
          >
            {
              centerMode &&
              <div
                ref={this.createCentratorRef}
                style={{ width: centratorWidth }}
                styleName="centrator"
              />
            }

            <Slides
              createNodes={this.createNodes}
              separatorRef={this.separatorRef}
              separatorClassName={this.props.separatorClassName}
              edgePadding={this.props.edgePadding && this.state.edgePadding}
              withBorders={this.props.withBorders}
            >
              {this.props.children}
            </Slides>

            {
              centerMode &&
              <div
                ref={this.createCentratorRef}
                style={{ width: centratorWidth }}
                styleName="centrator"
              />
            }
          </div>
        </div>
        {
          showControls && (
            <Controls
              controlsClassName={controlsClassName}
              controlsTextClassName={controlsTextClassName}
              currentPosition={position}
              maxValue={maxValueControls}
              onChengePosition={this.handleChengePosition}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default SnpSlider;
