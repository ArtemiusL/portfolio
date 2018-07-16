import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modsClasses from '_utils/modsClasses';

import styles from './Picture.scss';

const Picture = ({
  defaultSrc,
  className,
  source,
  alt,
  withBorderWidth,
}) => {
  const createSource = (el) => {
    const { src, media, retina } = el;

    const srcSet = retina ? `${src}, ${retina} 2x` : src;

    return (
      <source
        key={`media-${media}`}
        srcSet={srcSet}
        media={`(min-width: ${media}px)`}
      />
    );
  };

  const sourceList = source.map(createSource);
  const defaultImageSrc = defaultSrc || source[0].src;

  const classes = modsClasses(styles, { withBorderWidth });

  return (
    <picture styleName="wrap" className={className}>
      {sourceList}
      <img
        className={classnames(classes)}
        styleName="root"
        src={defaultImageSrc}
        alt={alt}
      />
    </picture>
  );
};

Picture.propTypes = {
  source: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    media: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    retina: PropTypes.string,
  })),
  alt: PropTypes.string,
  defaultSrc: PropTypes.string,
  className: PropTypes.string,
  withBorderWidth: PropTypes.oneOf(['one', 'two']),
};

export default CSSModules(Picture, styles);
