import { RECEIVE_ROLL, REQUEST_ROLL } from '../actions/apiRandomDice';

const initialState = {
  isRequested: false,
  currentRollDice: 0,
  currentRollResult: 0,
  currentRollTime: 0,
};

export function apiRandomDice(state = initialState, action) {
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
