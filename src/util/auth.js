import jwt_decode from 'jwt-decode';

export default {
  getAuthHeader() {
    return {
      Authorization: `${localStorage.getItem('token')}`,
    };
  },
  isTokenExpired(token) {
    return (jwt_decode(token).exp < Date.now() / 1000);
  },
};
