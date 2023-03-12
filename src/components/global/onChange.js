export const OnChange = (event, state, setState) => {
  const { name, value } = event.target;
  setState({ ...state, [name]: value });
};

// export const OnChangeArray = (event, state, setState) => {
//   const
// }
