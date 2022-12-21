import {all, takeLatest, takeEvery} from 'redux-saga/effects';
import {API} from '../../constants';
import {postLoginRequestCasesSaga} from './PostLoginRequestCasesSaga';
function* watchLoginRequestCaseAction() {
  yield takeLatest(API.APP_LOGIN_REUQUEST, postLoginRequestCasesSaga);
}
function* rootSaga() {
  yield all([
    watchLoginRequestCaseAction(),
  ]);
}

export default rootSaga;
