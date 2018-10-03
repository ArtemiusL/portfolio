import CSSModules from 'react-css-modules';

import {
  reduxForm,
  clearSubmitErrors,
} from 'redux-form';

import PropTypes from 'prop-types';
import React from 'react';

import { submit } from './utils/validationSubmit';

import Button from '_components/Button';
import Text from '_components/Text';

import styles from './SubscriptionForm.scss';

const SubscriptionForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form
      styleName="root"
      onSubmit={handleSubmit(submit)}
      onChange={() => {
        props.dispatch(clearSubmitErrors('subscriptionForm'));
        }
      }
    >

      <div styleName="button">
        <Button type="submit">
          <Text
            tag="span"
            size="normal"
            color="white"
            hover="black"
          >
            Submit
          </Text>
        </Button>
      </div>

    </form>
  );
};

SubscriptionForm.propTypes = {
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
};

const NewForm = reduxForm({
  form: 'subscriptionForm',
  enableReinitialize: true,
})(CSSModules(SubscriptionForm, styles));

export default NewForm;

