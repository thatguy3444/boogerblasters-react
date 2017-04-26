export const setAwesome = (boolValue) => {
  console.log('adding isAwesome:', boolValue);
  return {
    type: 'setAwesome',
    boolValue,
  };
};
