import {
    API,
    APP_LOGIN_SUCESS,
    APP_LOGIN_FAIL,
    APP_LOGIN_CLEAR,
  } from '../../constants';
  
  export default function postLoginRequestCasesReducer(
    state = {},
    action: any,
  ) {
    switch (action.type) {
      case API.APP_LOGIN_REUQUEST:
        return {...state, loading: true};
  
      case APP_LOGIN_SUCESS:
        return {...state, loading: false, response: action.payload};
  
      case APP_LOGIN_FAIL:
        return {...state, loading: false, response: null};
  
      case APP_LOGIN_CLEAR:
        return {...state, loading: false, response: null};
  
      default:
        return state;
    }
  }
  