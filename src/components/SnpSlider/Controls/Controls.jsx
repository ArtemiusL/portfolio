/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Slider from 'rc-slider';

import Text from '_components/Text';

import styles from './Controls.scss';

const trackStyle= {
  backgroundColor: 'transparent',
  height: 10,
};

const handleStyle={
  borderColor: '#fff',
  borderRadius: 'initial',
  height: 4,
  width: 58,
  marginLeft: -29,
  marginTop: -3,
  backgroundColor: 'black',
};

const railStyle={
  backgroundColor: '#fff',
  opacity: '0.5',
  height: 1,
};


class Controls extends React.PureComponent {
  static propTypes = {
    controlsTextClassName: PropTypes.string,
    controlsClassName: PropTypes.string ,
    currentPosition: PropTypes.number,
    onChengePosition: PropTypes.func,
    maxValue: PropTypes.number,
  };

  handleChenge = (value) => {
    this.props.onChengePosition(value);
  }

  render() {
    const defaultPosition = this.props.maxValue / 2;

    return (
      <React.Fragment>
        <div styleName="root" className={this.props.controlsClassName}>
          <Slider
            min={0}
            max={this.props.maxValue}
            value={this.props.currentPosition}
            onChange={this.handleChenge}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
          <Text
            className={this.props.controlsTextClassName}
            tag="span"
            styleName="controlText"
            letterSpacing="big"
            fontWeight="semi-bold"
            size="small"
          >
            Click & Drag
          </Text>
        </div>
      </React.Fragment>
    );
  }
}

export default CSSModules(Controls, styles);
