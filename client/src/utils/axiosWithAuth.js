import axios from 'axios';

// This function configures Axios to attach an Authorization: <token> header to requests for client-side authentication
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: '', // Be sure to update!
    headers: {
      Authorization: token,
    },
  });
};
