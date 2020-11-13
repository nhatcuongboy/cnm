import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as AppServices from '../../services/Shared/AppServices';
import * as AppActions from './AppActions';

export default function* rootSaga() {
  yield all([
    yield takeLatest('TEST_REQUEST', testRequest)
  ]);
}

function* testRequest({ actionSuccess }) {
  try {
    const { data } = yield call(AppServices.test);
    yield put(AppActions.testSuccess(data));
    if (actionSuccess) {
      actionSuccess(data);
    }
  } catch (error) {
    yield put(AppActions.testFailure(error));
  }
}
