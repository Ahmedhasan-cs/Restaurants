import {call, put, takeLatest} from 'redux-saga/effects';
import { API_ENDPOINTS, apiManager } from '@util/api/apiManager';
import { Cuisines } from '@util/api/models/CuisineResponse';
import { fetchCuisinesFailure, fetchCuisinesStart, fetchCuisinesSuccess } from '../slice/cuisineSlice';

const cuisineApi = async (): Promise<Cuisines> => {
  let result: Cuisines = await apiManager.get<Cuisines>(API_ENDPOINTS.cuisines);
  return result;
};

function* cuisineSaga() {
  try {
    const allData = yield call(cuisineApi);
    yield put(fetchCuisinesSuccess(allData));
  } catch (error) {
    yield put(fetchCuisinesFailure(error.message));
  }
}

export function* watchCuisineSaga() {
  yield takeLatest(fetchCuisinesStart.type, cuisineSaga);
}
