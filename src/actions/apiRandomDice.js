import moment from 'moment';

export const ROLL_SENT = 'apiRandomDice/ROLL_SENT';
export const ROLL_RECEIVED = 'apiRandomDice/ROLL_RECEIVED';
export const ROLL_ERROR = 'apiRandomDice/ROLL_ERROR';

const ROLL_CALL_URL = '';

export const rollSent = (numDice) => {
  console.log('Sent Roll-NumDice: ', numDice);
  return {
    type: ROLL_SENT,
    numDice,
    sentAt: moment().valueOf(),
  };
};

export const rollReceived = ({ numDice, roll }) => {
  console.log('Received Roll-NumDice: ', numDice);
  return {
    type: ROLL_RECEIVED,
    numDice,
    roll,
    completeAt: moment().valueOf(),
  };
};

export const rollError = (errorMessage) => {
  console.log('Error Rolling-NumDice: ', numDice);
  return {
    type: ROLL_ERROR,
    completeAt: moment().valueOf(),
    errorMessage,
  };
};

export function callRequestRoll(numDice) {
  return (dispatch) => {
    dispatch(rollSent(numDice));

    fetch(ROLL_CALL_URL)
      .then((response) => {
        if (!response.ok) {
          dispatch(rollError(response.statusText));
        }
        return response;
      })
      .then(response => response.json())
      .then(responseJSON => dispatch(rollReceived(responseJSON)))
      .catch(err => dispatch(rollError(err)));
  };
}
