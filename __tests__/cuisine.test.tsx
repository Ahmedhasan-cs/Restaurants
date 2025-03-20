import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {
  CuisinesNavigationProps,
  RouteNames,
} from '@navigators/dashboard/DashboardNavigationProps';
import CuisineListScreen from '@features/dashboard/screens/CuisineList/ui/components/CuisineListScreen';
import cuisinesReducer from '@util/redux/slice/cuisineSlice';
import rootReducer from '@util/redux/rootReducer';
import reducer from '@util/redux/slice/cuisineSlice';
import {cuisinesData} from '@util/api/mocks/cuisines';
import createSagaMiddleware from 'redux-saga';

// Mock navigation
const mockNavigate = jest.fn();
const mockRoute = {params: {}};
const mockNavigation: Partial<CuisinesNavigationProps['navigation']> = {
  navigate: mockNavigate,
};

jest.mock('@util/api/apiManager', () => ({
  API_ENDPOINTS: {
    login: '/login',
    cuisines: '/cuisines',
  },
}));

export const createTestStore = (customState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: {
      cuisines: {
        cuisines: cuisinesData,
        loading: false,
        error: null,
      },
      auth: {
        isAuthorized: true,
        loading: false,
        error: null,
      },
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}), // No sagas in tests
  });
};

export const renderWithProviders = (
  ui,
  {store} = {store: createTestStore()},
) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('CuisineListScreen Tests', () => {
  it('should render cuisines from Redux store', () => {
    const {getByText} = renderWithProviders(
      <CuisineListScreen
        navigation={mockNavigation as any}
        route={mockRoute as any}
      />,
    );

    expect(getByText('Italian')).toBeTruthy();
    expect(getByText('Indian')).toBeTruthy();
    expect(getByText('Chinese')).toBeTruthy();

    expect(getByText('19 places')).toBeTruthy();
    expect(getByText('11 places')).toBeTruthy();
    expect(getByText('16 places')).toBeTruthy();
  });

  it('renders CuisineListScreen correctly and matches snapshot', () => {
    const tree = renderWithProviders(
      <CuisineListScreen
        navigation={mockNavigation as any}
        route={mockRoute as any}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot(); // ✅ Snapshot comparison
  });
});
