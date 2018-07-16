import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import classnames from 'classnames';

import styles from './Slides.scss';

@CSSModules(styles, { allowMultiple: true })
class Slides extends React.Component {
  static propTypes = {
    createNodes: PropTypes.func.isRequired,
    separatorRef: PropTypes.func.isRequired,
    separatorClassName: PropTypes.string,
    edgePadding: PropTypes.bool,
    withBorders: PropTypes.bool,
    children: PropTypes.any,
  }

  renderChildren = () => {
    const {
      separatorClassName,
      separatorRef,
      createNodes,
      edgePadding,
      children,
      withBorders,
    } = this.props;

    const renderFirstSepIndex = withBorders ? 0 : -1;
    const renderLastSepIndex = withBorders ? children.length - 2 : children.length - 1;

    return React.Children.map(children, (child, index) => (
      <Fragment>
        {
          React.cloneElement(child,
          {
            ref: node => createNodes(node, index),
            className: edgePadding ?
              classnames(child.props.className, styles.child) :
              child.props.className,
          })
        }
        {
          (index !== renderFirstSepIndex && index < renderLastSepIndex) &&
          <div ref={separatorRef} styleName="separate" className={separatorClassName} />
        }
      </Fragment>
    ));
  };

  render() {
    return this.renderChildren();
  }
}

export default Slides;
