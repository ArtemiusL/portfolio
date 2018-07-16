import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({
  disableType,
  classNameDisabled,
  className,
  onNextClick,
  onPrevClick,
  children,
  type,
}) => {
  if (type === 'prev') {
    return (
      <button
        onClick={onPrevClick}
        className={`${className || ''} ${disableType === 'prev' ? classNameDisabled : ''}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onNextClick}
      className={`${className || ''} ${disableType === 'next' ? classNameDisabled : ''}`}
    >
      {children}
    </button>
  );
};

Arrow.propTypes = {
  children: PropTypes.any,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  type: PropTypes.oneOf(['next', 'prev']),
  className: PropTypes.string,
  classNameDisabled: PropTypes.string,
  disableType: PropTypes.string,
};

export default Arrow;
