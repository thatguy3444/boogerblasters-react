import { ROLL_SENT, ROLL_RECEIVED, ROLL_ERROR } from '../actions/apiRandomDice';

const initialState = {
  isRequested: false,
  isError: false,
  rollDice: 0,
  rollResult: 0,
  timeRollRequest: 0,
  timeRollComplete: 0,
  statusText: '',
};

export function apiRandomDice(state = initialState, action) {
  switch (action.type) {
    case ROLL_SENT:
      return Object.assign({}, state, {
        isRequested: true,
        isError: false,
        rollDice: action.numDice,
        rollResult: 0,
        timeRollRequest: action.sentAt,
        timeRollComplete: 0,
        statusText: 'Requesting',
      });
    case ROLL_RECEIVED:
      return Object.assign({}, state, {
        isRequested: false,
        isError: false,
        rollDice: action.numDice,
        rollResult: action.roll,
        timeRollComplete: action.completeAt,
        statusText: 'Received',
      });
    case ROLL_ERROR:
      return Object.assign({}, state, {
        isRequested: false,
        isError: true,
        rollDice: 0,
        rollResult: 0,
        timeRollComplete: action.completeAt,
        statusText: `Error: ${action.errorMessage}`,
      });
    default:
      return state;
  }
}
