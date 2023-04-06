import api from './api';

export async function PatchObjective({ value, id }) {
  const { data } = await api.patch(`api/objective/${id}`, value);
  return data;
}

export async function PatchKR({ value, id }) {
  const { data } = await api.patch(`api/keyresult/${id}`, value);
  return data;
}

export async function PatchObjectiveProgress({ value, id }) {
  const { data } = await api.patch(`api/objective/progress/${id}`, value);
  return data;
}

export async function PatchKRProgress({ value, id }) {
  const { data } = await api.patch(`api/keyresult/progress/${id}`, value);
  return data;
}

export async function PatchEmotion({ id, value }) {
  const { data } = await api.patch(`api/keyresult/emoticon/${id}`, value);
  return data;
}

export async function PatchCheck({ id }) {
  const { data } = await api.patch(`api/todo/check/${id}`);
  return data;
}

export async function PatchTodo({ id, value }) {
  const { data } = await api.patch(`api/todo/${id}`, value);
  return data;
}

export async function PatchTutorial() {
  const { data } = await api.patch(`api/user/tutorial`);
  return data;
}
