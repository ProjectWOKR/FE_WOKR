import api from './api';

export async function GetObjective() {
  const { data } = await api.get('api/objective');
  return data;
}

export async function GetDetailObjective(id) {
  id = 1;
  const { data } = await api.get(`api/objective/detail/${id}`);
  return data;
}
