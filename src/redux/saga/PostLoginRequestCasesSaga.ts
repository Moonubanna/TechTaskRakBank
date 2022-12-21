import {put} from 'redux-saga/effects';
import {
    API,
    APP_LOGIN_SUCESS,
    APP_LOGIN_FAIL,
} from '../../constants';
import callApis from './../services/index';

export function* postLoginRequestCasesSaga(action: any) {
  try {
    const data = yield callApis(action);
    yield put({
      type: APP_LOGIN_SUCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: APP_LOGIN_FAIL,
      payload: null,
    });
  }
}
