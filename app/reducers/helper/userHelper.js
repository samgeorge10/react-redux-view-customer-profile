import _ from 'lodash';

let clonedState;

export const setUserProfileDetails = (state, action) => {
  clonedState = _.cloneDeep(state);

  const userData = action.data;
  
  clonedState.userData = userData;
  clonedState.userName = userData.name;
  clonedState.userOrders = userData.orders;

  return clonedState;
};