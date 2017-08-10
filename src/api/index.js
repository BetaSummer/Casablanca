import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 1000,
});

export async function fetchMembersByGeneration(generation) {
  const { data } = await api.get(`/members?generation=${generation}`);
  return data;
}
