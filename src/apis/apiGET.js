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

export async function GetKR() {
  const { data } = await api.get(`api/keyresult`);
  return data;
}

export async function GetDetailKR(id) {
  id = 1;
  const { data } = await api.get(`api/keyresult/detail/${id}`);
  return data;
}

export async function GetOKR() {
  const { data } = await api.get(`api/okr`);
  return data;
}

// export async function GetTodo() {
//   const { data } = await api.get(`api/todo`);
//   return data;
// }

export async function GetAllTodo() {
  const { data } = await api.get(`api/todo/progress`);
  return data;
}

export async function GetUser() {
  const { data } = await api.get(`api/user/team/member`);
  return data;
}

export async function GetPastTodo() {
  const { data } = await api.get(`api/todo/expiration`);
  return data;
}

export async function GetInfinityTodo(page) {
  page = 1;
  const { data } = await api.get(`api/todo/progress?page=${page}`);
  return data;
}

export async function GetCompletionTodo() {
  const { data } = await api.get(`api/todo/completion`);
  return data;
}

export async function GetUserInfo(uid) {
  const { data } = await api.get(`api/user/${uid}`);
  return data;
}

export async function GetMyTodo() {
  const { data } = await api.get(`api/todo`);
  return data;
}
