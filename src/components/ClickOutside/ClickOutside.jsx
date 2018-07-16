import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class ClickOutside extends PureComponent {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { handelOutside } = this.props;
      if (handelOutside) {
        handelOutside();
      }
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}

export default ClickOutside;

ClickOutside.propTypes = {
  children: PropTypes.any.isRequired,
  handelOutside: PropTypes.func,
};
