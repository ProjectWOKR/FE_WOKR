import api from './api';

export async function SignUp(Info) {
  const { data } = await api.post('api/user/signup', Info);
  return data;
}

export async function SignIn(Info) {
  const { data } = await api.post('api/user/login', Info);
  return data;
}

export async function CreateObjective(Info) {
  const { data } = await api.post('api/objective', Info);
  return data;
}

export async function CreateKR({ value, id }) {
  const { data } = await api.post(`api/${id}/keyresult`, value);
  return data;
}

export async function CreateTodo({ Oid, Kid, Info }) {
  const { data } = await api.post(`api/${Oid}/${Kid}/todo`, Info);
  return data;
}

export async function PostExpirationTodo({ info }) {
  // console.log(Info)
  const { data } = await api.post(`api/todo/expiration`, info);
  return data;
}

export async function PostProgressTodo({ info }) {
  const { data } = await api.post(`api/todo/progress`, info);
  return data;
}

export async function PostCompletionTodo({ info }) {
  const { data } = await api.post(`api/todo/completion`, info);
  return data;
}

export async function PostWeek({ forData }) {
  const { data } = await api.post(`api/todo/week`, forData);
  return data;
}
