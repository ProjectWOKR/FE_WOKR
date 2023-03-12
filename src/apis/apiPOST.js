import api from './api';

export async function SignUp(Info) {
  const { data } = await api.post('/api/user/signup', Info);
  return data;
}

export async function SignIn(Info) {
  const { data } = await api.post('/api/user/login', Info);
  return data;
}

export async function CreateObjective(Info) {
  const { data } = await api.post('api/objective', Info);
  return data;
}
