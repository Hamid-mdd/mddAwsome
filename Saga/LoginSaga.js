import {call, put} from 'redux-saga/effects';
// import UserAuthActions from '../Redux/UserAuthRedux';
import productsService from '../Services/Api';  

import {LoginSuccess, LoginFailure, LoginUserRequest} from '../Redux/Actions/LoginAction'
// import NavigationService from '../Navigation/NavigationService';
 
// import {setAuthorizationToken} from '../utils/utils';
 
export function* loginUserRequest(api, action) {
  try {
    const {payload} = action;
    const response = yield call(productsService.getAllProducts, payload);
    console.log(response, 'login response');
 
    if (response.ok) {
      const {
        data: {token, data},
      } = response;
      if (token) {
        api.updateHeader('Authorization', token);
        setAuthorizationToken(token, data);
      }
      yield put(LoginSuccess(response.data));
      NavigationService.navigate('HomeScreen');
      // yield put(initialize("ProfileForm", response.data.data));
    } else {
      yield put(LoginFailure());
     
    }
  } catch (e) {
    console.log("error")
  }
}