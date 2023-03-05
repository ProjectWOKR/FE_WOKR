export const onPwEyeState = (state, setState) => {
  if (state === '') {
    setState('password');
  } else if (state === 'password') {
    setState('');
  }
};
