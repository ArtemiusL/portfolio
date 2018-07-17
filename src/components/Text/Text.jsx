import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

import modsClasses from '_utils/modsClasses';

import styles from './Text.scss';

@CSSModules(styles)

class Text extends PureComponent {
  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  render() {
    const {
      className,
      size,
      tag,
      color,
      hover,
      opacity,
      fontSize,
      textAlign,
      whiteSpace,
      mobileSize,
      letterSpacing,
      letterSpacingSize,
      textTransform,
      fontWeight,
      children,
      html,
      pointerEvents,
      border,
      rotate,
    } = this.props;

    const classes = modsClasses(styles,
      {
        size,
        color,
        hover,
        opacity,
        textAlign,
        whiteSpace,
        mobileSize,
        fontWeight,
        letterSpacing,
        letterSpacingSize,
        textTransform,
        pointerEvents,
        border,
        rotate,
      },
    );

    const Tag = tag;

    return (
      <Tag
        style={{ letterSpacing, fontSize }}
        styleName="root"
        className={classnames(className, classes)}
        onClick={this.handleClick}
      >
        {!html ? children : renderHTML(children)}
      </Tag>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'medium-xl', 'average', 'big', 'large', 'medium-l']),
  mobileSize: PropTypes.oneOf(['small', 'small-xs', 'small-xl', 'normal', 'medium', 'medium-xl', 'average', 'big', 'large']),
  letterSpacingSize: PropTypes.oneOf(['big']),
  fontWeight: PropTypes.oneOf(['bold', 'black', 'normal', 'medium', 'semi-bold']),
  color: PropTypes.oneOf(['white', 'black', 'silver', 'red']),
  hover: PropTypes.oneOf(['white', 'black', 'opacity', 'white-to-black']),
  textTransform: PropTypes.oneOf(['uppercase', 'none']),
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'prewrap']),
  opacity: PropTypes.oneOf(['light', 'middle', 'dark', 'half']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  pointerEvents: PropTypes.oneOf(['auto', 'none']),
  border: PropTypes.oneOf(['white', 'black']),
  rotate: PropTypes.oneOf(['left', 'right']),
  letterSpacing: PropTypes.string,
  fontSize: PropTypes.string,
  data: PropTypes.any,
  tag: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  html: PropTypes.bool,
};

Text.defaultProps = {
  tag: 'div',
  size: 'small',
  fontWeight: 'medium',
  color: 'white',
  html: false,
};

export default Text;
