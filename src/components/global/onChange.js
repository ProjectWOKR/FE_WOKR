export const OnChange = (event, state, setState) => {
  const { name, value } = event.target;
  setState({ ...state, [name]: value });
};
