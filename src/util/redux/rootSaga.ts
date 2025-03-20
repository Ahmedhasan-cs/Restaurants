import {all} from 'redux-saga/effects';
import { watchLoginSaga } from './saga/loginSaga';
import { watchCuisineSaga } from './saga/cuisineSaga';


function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchCuisineSaga(),
  ]);
}

export default rootSaga;
