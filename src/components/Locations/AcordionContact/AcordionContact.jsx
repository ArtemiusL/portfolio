import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import AnimateHeight from 'react-animate-height';

import ClickOutside from '_components/ClickOutside';
import Button from '_components/Button';
import Text from '_components/Text';

import styles from './AcordionContact.scss';

class AcordionContact extends PureComponent {
  state = { active: false }

  handleToggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  handleClose = () => {
    this.setState({ active: false });
  }

  render() {
    const {
      location,
      address,
      mail,
      tell,
      theme,
    } = this.props;

    const { active } = this.state;

    return (
      <ClickOutside handelOutside={active ? this.handleClose : null}>
        <Text
          onClick={this.handleToggle}
          styleName="header"
          tag="h6"
          size="normal"
          fontWeight="semi-bold"
          letterSpacingSize="big"
          border="white"
          hover="black"
          color={theme}
        >
          {location}
        </Text>

        <AnimateHeight
          height={active ? 'auto' : 0}
          duration={300}
          easing="ease-out"
        >
          <Text
            tag="p"
            size="normal"
            fontWeight="normal"
            color={theme}
            html
          >
            {address}
          </Text>
          <Button href={`mailto:${mail}`}>
            <Text
              tag="span"
              size="normal"
              fontWeight="normal"
              color={theme}
            >
              {mail}
            </Text>
          </Button>
          <br />
          <Button href={`tell:${tell}`}>
            <Text
              tag="span"
              size="normal"
              fontWeight="normal"
              color={theme}
            >
              {tell}
            </Text>
          </Button>
        </AnimateHeight>
      </ClickOutside>
    );
  }
}

AcordionContact.propTypes = {
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  tell: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['black', 'white']),
};

export default CSSModules(AcordionContact, styles);
