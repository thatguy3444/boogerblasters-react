export function isAwesome(state = 1, action) {
  switch (action.type) {
    case 'setAwesome':
      console.log(`${action.type}:VALUE:${action.boolValue}`);
      return Object.assign({}, state, {
        isAwesome: action.boolValue,
      });
    default:
      return state;
  }
}
