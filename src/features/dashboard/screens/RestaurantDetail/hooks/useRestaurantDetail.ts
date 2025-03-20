import { useReduxSelector } from '@util/redux/store';
import { hasError, inLoading, selectedRestaurantData } from '@util/redux/slice/cuisineSlice';
import { Restaurant } from '@util/api/models/CuisineResponse';

interface ResturantsOperators {
  isLoading: boolean;
  error: string | null;
  selectedRestaurant: Restaurant;
}

export const useRestaurantDetail = (): Readonly<ResturantsOperators>  => {
  const selectedRestaurant = useReduxSelector(selectedRestaurantData);
  const isLoading = useReduxSelector(inLoading);
  const error = useReduxSelector(hasError);
  
  return {
    isLoading,
    error,
    selectedRestaurant,
  };
};
