import * as ActionTypes from '../actions/actionTypes';
import * as userHelper from './helper/userHelper';

export const initialState = {
  userName: '',
  userOrders: [],
  userData: {}
};

const userReducer = (state=initialState, action) => {
  const { type } = action;

  switch(type) {
    case ActionTypes.GET_USER_PROFILE_DETAILS:
      return userHelper.setUserProfileDetails(state, action);
    default:
      return state;
  }
};

export default userReducer;