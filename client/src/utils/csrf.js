import Cookies from 'js-cookie';

export const getCSRFToken = () => {
  return Cookies.get('XSRF-TOKEN');
};