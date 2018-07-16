const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emptyEmailField = 'Email not entered';
const incorectEmailField = 'Incorrect email';

export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = emptyEmailField;
  } else if (!emailRegexp.test(values.email)) {
    errors.email = incorectEmailField;
  }
  return errors;
};

