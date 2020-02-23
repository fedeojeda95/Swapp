export default (category, state) => {
  const { elements } = state[category];
  return elements;
};
