export default(state = [], payload) => {
  switch (payload.type) {
    case 'add':
      return [...state, payload.color];
    default:
      return state;
  }
};