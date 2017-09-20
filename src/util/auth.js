export default {
  getAuthHeader() {
    return {
      Authorization: `${localStorage.getItem('token')}`,
    };
  },
};
