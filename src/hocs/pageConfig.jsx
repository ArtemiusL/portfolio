import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { pageConfigSelector } from '_selectors';

/**
  * pageConfig: PropTypes.shape({
  *   // Название страницы
  *   name: PropTypes.string,
  *
  *   // Название секции страницы (например на странице коллекций)
  *   section: PropTypes.oneOf(['', 'mns', 'wmns']),
  *
  *   // Цветовая схема страницы
  *   colorScheme: PropTypes.oneOf(['white', 'black'])
  * })
*/

const pageConfig = WrappedComponent => props => <WrappedComponent {...props} />;

const composedHoc = compose(
  connect(state => ({ pageConfig: pageConfigSelector(state) }), null, null, { pure: false }),
  pageConfig,
);

export default composedHoc;
