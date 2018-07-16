import { createFormAction } from 'redux-form-saga';

import { SEND_EMAIL } from './constants';

export const sendUserEmail = createFormAction(SEND_EMAIL);
