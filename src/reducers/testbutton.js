import { SET_BUTTON_STATE, TOGGLE_BUTTON_STATE } from '../actions/testbutton';

const initialState = {
  isOn: false,
};

export function testbutton(state = initialState, action) {
  switch (action.type) {
    case SET_BUTTON_STATE:
      return Object.assign({}, state, {
        isOn: action.boolValue,
      });
    case TOGGLE_BUTTON_STATE:
      return Object.assign({}, state, {
        isOn: !state.isOn,
      });
    default:
      return state;
  }
}
