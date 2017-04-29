import moment from 'moment';

export const REQUEST_ROLL = 'apiRandomDice/REQUEST_ROLL';
export const RECEIVE_ROLL = 'apiRandomDice/RECEIVE_ROLL';

export const requestRoll = (numDice) => {
  console.log('Requesting Roll-NumDice: ', numDice);
  return {
    type: REQUEST_ROLL,
    numDice,
  };
};

export const receiveRoll = (numDice, json) => {
  console.log('Received Roll-NumDice: ', numDice);
  return {
    type: RECEIVE_ROLL,
    numDice,
    roll: json.data.roll,
    receivedAt: moment().valueOf(),
  };
};
