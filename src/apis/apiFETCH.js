import api from './api';

export async function PatchObjectiveProgress({ value, id }) {
  const { data } = await api.patch(`api/objective/progress/${id}`, value);
  return data;
}
