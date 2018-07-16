import Req from './request';

export const sendEmailApi = data =>
  Req.POST({
    url: '/signin',
    data,
  });
