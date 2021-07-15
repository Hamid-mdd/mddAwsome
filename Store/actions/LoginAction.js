import axios from 'axios'
import { AuthActionTypes } from '../actionTypes'


const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} = AuthActionTypes

export const fetchUsers = () => {
  // insert Whole
  // const { username, password } = loginInput;
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        console.log("users", users)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: LOGIN_START
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: LOGIN_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: LOGIN_FAIL,
    payload: error
  }
}

