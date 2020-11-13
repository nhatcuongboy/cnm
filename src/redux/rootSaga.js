import { all } from 'redux-saga/effects';
import AppSaga from './App/AppSaga';

export default function* root() {
  yield all([
    AppSaga(),
  ]);
}
