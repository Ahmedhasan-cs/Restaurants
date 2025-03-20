import {call, put, takeLatest} from 'redux-saga/effects';
import { loginFailure, LoginPayload, loginRequest, loginSuccess } from '../slice/authenticationSlice';
import { API_ENDPOINTS, apiManager } from '@util/api/apiManager';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '@util/api/models/LoginResponse';

const loginApi = async (credentials: LoginPayload): Promise<LoginResponse> => {
  let result: LoginResponse = await apiManager.post<LoginResponse>(API_ENDPOINTS.login, credentials);
  return result;
};

function* loginSaga(action: PayloadAction<LoginPayload>) {
  try {
    yield call(loginApi, action.payload);
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}
