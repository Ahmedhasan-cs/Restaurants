import {combineReducers} from 'redux';
import authReducer from './slice/authenticationSlice';
import cuisinesReducer from './slice/cuisineSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cuisines: cuisinesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
