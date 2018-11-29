import axios from 'axios';
import * as ActionTypes from './actionTypes';

/**
 * Load user details from the API
 * 
 * @param {string} url
 */
export const loadUserDetails = (url) => {
  const request = axios({
    method: 'get',
    url,
    crossDomain: true,
    headers: []
  });

  return dispatch => {
    return request
    .then(response => {
      dispatch(getUserProfile(response.data))
    })
    .catch(error => {
      console.error(error);
    });
  }
};

/**
 * Get user profile details
 * 
 * @param {*} data 
 */
export const getUserProfile= (data) => {
  return {
    type: ActionTypes.GET_USER_PROFILE_DETAILS,
    data
  };
};
