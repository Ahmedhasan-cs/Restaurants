import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);

    if (__DEV__) {
      middlewares.push(logger); // Add logger only in development
    }

    return middlewares;
  },
});

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
