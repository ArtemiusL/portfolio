import React, { Component } from 'react';

import { changeWindowSize } from './utils';

class RemSize extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    changeWindowSize();
  }

  render() {
    return <div />;
  }
}

export default RemSize;
