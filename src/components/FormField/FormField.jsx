import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import Text from '_components/Text';

import styles from './FormField.scss';

@CSSModules(styles, { allowMultiple: true })
class FormField extends PureComponent {
  render() {
    const {
      className,
      meta: { touched, error },
      type,
      placeholder,
      name,
      input,
    } = this.props;

    const hasError = error && touched;

    return (
      <div styleName="root" className={className}>
        <input
          {...input}
          name={name}
          placeholder={placeholder}
          styleName={classnames('input', { hasError })}
          type={type}
        />
        {hasError &&
          <Text
            size="normal"
            color="red"
          >
            {error}
          </Text>
        }
      </div>
    );
  }
}

FormField.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
