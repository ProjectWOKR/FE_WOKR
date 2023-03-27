import api from './api';

export async function DeleteKR(id) {
  const { data } = await api.delete(`api/keyresult/${id}`);
  return data;
}

export async function DeleteObjective(id) {
  const { data } = await api.delete(`api/objective/${id}`);
  return data;
}

export async function DeleteTodo(id) {
  const { data } = await api.delete(`api/todo/${id}`);
  return data;
}
