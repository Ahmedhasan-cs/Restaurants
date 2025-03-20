import {useCallback, useEffect, useMemo, useState} from 'react';
import { useReduxDispatch, useReduxSelector } from '@util/redux/store';
import { cuisinesData, fetchCuisinesStart, hasError, inLoading, setSelectedCuisine } from '@util/redux/slice/cuisineSlice';
import { Cuisine, CuisineCount, Cuisines } from '@util/api/models/CuisineResponse';

interface CuisinesOperators {
  cuisines: Cuisines;
  isLoading: boolean;
  error: string | null;
  fetchCuisines: () => void;
  cuisineCounts: CuisineCount[];
  handleSelectedCuisine : (cuisine: Cuisine) => void;
}

export const useCuisines = (): Readonly<CuisinesOperators>  => {
  const dispatch = useReduxDispatch();
  const cuisines = useReduxSelector(cuisinesData);
  const isLoading = useReduxSelector(inLoading);
  const error = useReduxSelector(hasError);
  
  const cuisineCounts: CuisineCount[] = useMemo(() => {
    if (!cuisines || Object.keys(cuisines).length === 0) {
      console.warn("Cuisines object is empty or undefined");
      return [];
    }
  
    return Object.entries(cuisines).map(([title, status]) => ({
      title: title as Cuisine,
      count: (status.open?.length || 0) + (status.close?.length || 0),
    }));
  }, [cuisines]);

  const handleSelectedCuisine = useCallback((cuisine: Cuisine) => {
    dispatch(setSelectedCuisine(cuisine));
  }, [dispatch]);


  const fetchCuisines = useCallback(() => {
    dispatch(fetchCuisinesStart());
  }, [dispatch]);

  useEffect(() => {
      fetchCuisines();
    }, [fetchCuisines]);


  return {
    cuisines,
    isLoading,
    error,
    fetchCuisines,
    cuisineCounts,
    handleSelectedCuisine
  };
};
