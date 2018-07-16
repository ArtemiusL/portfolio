import { SubmissionError } from 'redux-form';
import { sendUserEmail } from '_actions/users';

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emptyEmailField = 'Email not entered';
const incorectEmailField = 'Incorrect email';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const submit = (values, dispatch) => (
  sleep(0).then(() => {
    if (!values.email) {
      throw new SubmissionError({
        email: emptyEmailField,
      });
    } else if (!emailRegexp.test(values.email)) {
      throw new SubmissionError({
        email: incorectEmailField,
      });
    } else {
      sendUserEmail(values, dispatch);
    }
  })
);
