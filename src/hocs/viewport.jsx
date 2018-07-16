import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isMobileSelector, isDesktopSelector } from '_selectors';

const viewport = WrappedComponent => props => <WrappedComponent {...props} />;

const composedHoc = compose(
  connect(state => ({
    isMobile: isMobileSelector(state),
    isDesktop: isDesktopSelector(state),
  }), null, null, { pure: false }),
  viewport,
);

export default composedHoc;
