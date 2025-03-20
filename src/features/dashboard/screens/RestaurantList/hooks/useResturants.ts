import {useCallback, useMemo} from 'react';
import { useReduxDispatch, useReduxSelector } from '@util/redux/store';
import { cuisinesData, hasError, inLoading, selectedCuisineData, setSelectedRestaurant } from '@util/redux/slice/cuisineSlice';
import { Cuisine, Restaurant } from '@util/api/models/CuisineResponse';

interface ResturantsOperators {
  isLoading: boolean;
  error: string | null;
  selectedCuisine: Cuisine;
  resturants: Restaurant[];
  handleSelectedRestaurant : (resturant: Restaurant) => void;
}

export const useResturants = (): Readonly<ResturantsOperators>  => {
  const dispatch = useReduxDispatch();
  const cuisines = useReduxSelector(cuisinesData);
  const selectedCuisine = useReduxSelector(selectedCuisineData);
  const isLoading = useReduxSelector(inLoading);
  const error = useReduxSelector(hasError);
  
  const resturants: Restaurant[] = useMemo(() => {
    if (!cuisines || Object.keys(cuisines).length === 0) {
      console.warn("Cuisines object is empty or undefined");
      return [];
    }
  
    const selectedCuisineResturants = cuisines[selectedCuisine];
    if (!selectedCuisineResturants) {
      console.warn(`No resturants found for ${selectedCuisine}`);
      return [];
    } 
    const updatedRestaurants = [
      ...selectedCuisineResturants.open.map(rest => ({
        ...rest,
        isOpened: true
      })),
      ...selectedCuisineResturants.close.map(rest => ({
        ...rest,
        isOpened: false
      }))
    ];
    return updatedRestaurants
  }, [cuisines]);

  const handleSelectedRestaurant = useCallback((resturant: Restaurant) => {
    dispatch(setSelectedRestaurant(resturant));
  }, [dispatch]);

  return {
    isLoading,
    error,
    selectedCuisine,
    resturants,
    handleSelectedRestaurant
  };
};
