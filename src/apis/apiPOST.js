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
  // console.log('ddd');
  // console.log(Info);
  console.log(Oid, Kid, Info);
  const { data } = await api.post(`api/${Oid}/${Kid}/todo`, Info);
  return data;
}
