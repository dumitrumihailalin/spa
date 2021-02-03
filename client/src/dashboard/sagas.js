import { put } from 'redux-saga/effects'
import {
  LOGIN_SUCCESS
} from './constants'
export function* DashboardSaga() {
  yield put({ type: LOGIN_SUCCESS })
}