import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import CSSModules from 'react-css-modules';

import AcordionContact from './AcordionContact';
import Contact from './Contact';

import content from './content';

const Locations = ({
  type,
  theme,
  activeMenu,
  pageAnimation,
}) => {
  const createLocation = (location) => {
    if (type === 'acordion') {
      return (
        <AcordionContact
          key={location.location}
          location={location.location}
          address={location.address}
          mail={location.mail}
          tell={location.tell}
          theme={theme}
        />
      );
    }

    return (
      <Contact
        key={location.location}
        location={location.location}
        address={location.address}
        mail={location.mail}
        tell={location.tell}
        activeMenu={activeMenu}
        pageAnimation={pageAnimation}
        theme={theme}
      />
    );
  };

  const locationsList = content.map(createLocation);

  if (type === 'acordion') {
    return (
      <div>
        {locationsList}
      </div>
    );
  }

  return (
    <Fragment>
      {locationsList}
    </Fragment>
  );
};

Locations.propTypes = {
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
  type: PropTypes.oneOf(['acordion', '']),
  theme: PropTypes.oneOf(['black', 'white']),
};

Locations.defaultProps = {
  type: '',
  theme: 'black',
};

export default Locations;
