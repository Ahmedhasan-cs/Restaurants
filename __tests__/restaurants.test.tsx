import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {
  CuisinesNavigationProps,
  RestaurantsNavigationProps,
  RouteNames,
} from '@navigators/dashboard/DashboardNavigationProps';
import CuisineListScreen from '@features/dashboard/screens/CuisineList/ui/components/CuisineListScreen';
import cuisinesReducer from '@util/redux/slice/cuisineSlice';
import rootReducer from '@util/redux/rootReducer';
import reducer from '@util/redux/slice/cuisineSlice';
import {cuisinesData} from '@util/api/mocks/cuisines';
import createSagaMiddleware from 'redux-saga';
import RestaurantListScreen from '@features/dashboard/screens/RestaurantList/ui/components/RestaurantListScreen';
import {useResturants} from '@features/dashboard/screens/RestaurantList/hooks/useResturants';

// Mock navigation
const mockNavigate = jest.fn();
const mockRoute = {params: {}};
const mockNavigation: Partial<RestaurantsNavigationProps['navigation']> = {
  navigate: mockNavigate,
};

jest.mock(
  '@features/dashboard/screens/RestaurantList/hooks/useResturants',
  () => ({
    useResturants: jest.fn(),
  }),
);

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
  beforeEach(() => {
    (useResturants as jest.Mock).mockReturnValue({
      selectedCuisine: 'italian',
      error: null,
      isLoading: false,
      resturants: [
        {
          id: '6109200ecdbea9077786439c',
          restaurantName: 'Lunchpod',
          shortDesc: 'Relax your belly',
          currency: 'EUR',
          deliveryCost: 2.15,
          rating: 6,
          minOrder: 10,
          deliveryTime: '20-25 min',
          speciality: 'DINNER',
          imageUrl:
            'https://www.top10berlin.de/wp-content/uploads/2023/11/top10berlin_feedback002.jpg',
        },
        {
          id: '6109200e7363c5fce8c4262e',
          restaurantName: 'Magneato',
          shortDesc: 'Soul for food',
          currency: 'EUR',
          deliveryCost: 1.91,
          rating: 6,
          minOrder: 15,
          deliveryTime: '15-20 min',
          imageUrl:
            'https://www.top10berlin.de/wp-content/uploads/2023/11/umami_top10berlin003.jpg',
        },
      ],
      handleSelectedRestaurant: jest.fn(),
    });
  });

  it('should render cuisines from Redux store', () => {
    const {getByText, getAllByTestId} = renderWithProviders(
      <RestaurantListScreen
        navigation={mockNavigation as any}
        route={mockRoute as any}
      />,
    );

    expect(getByText('Italian')).toBeTruthy();
    expect(getByText('Lunchpod')).toBeTruthy();

    const items = getAllByTestId('cuisine-item');
    expect(items.length).toBe(2); // ✅ Check if 3 items are rendered
  });

  it('renders CuisineListScreen correctly and matches snapshot', () => {
    const tree = render(
      <RestaurantListScreen
        navigation={mockNavigation as any}
        route={mockRoute as any}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot(); // ✅ Snapshot comparison
  });
});
