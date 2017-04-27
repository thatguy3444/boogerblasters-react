export const SET_BUTTON_STATE = 'testbutton/SET_BUTTON_STATE';
export const TOGGLE_BUTTON_STATE = 'testbutton/TOGGLE_BUTTON_STATE';

export const setButtonState = (boolValue) => {
  console.log('setting button state:', boolValue);
  return {
    type: SET_BUTTON_STATE,
    boolValue,
  };
};

export const toggleButtonState = () => {
  return {
    type: TOGGLE_BUTTON_STATE,
  };
};
