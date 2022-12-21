import {
  API,
  APP_LOGIN_CLEAR,
} from '../../constants';

export function postLoginRequestDataAction(data: object) {
  return {
    type: API.APP_LOGIN_REUQUEST,
    payload: data,
  };
}

export function postClearLoginRequestDataAction(data: any) {
  return {
    type: APP_LOGIN_CLEAR,
    payload: data,
  };
}