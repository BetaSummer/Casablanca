import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 1000,
});

export function fetchMembersByGeneration(generation) {
  api.get(`/members?generation=${generation}`).then(response => response.data);
}
