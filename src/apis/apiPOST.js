import api from './api';
import axios from 'axios';

export async function SignUp(Info) {
  const { data } = await axios.post(
    'http://13.209.64.59/api/user/signup',
    Info
  );
  return data;
}

export async function SignIn(Info) {
  const { data } = await axios.post('http://13.209.64.59/api/user/login', Info);
  return data;
}
