import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';
import { Cuisine, Cuisines, Restaurant } from '@util/api/models/CuisineResponse';

interface CuisineState {
  cuisines?: Cuisines;
  selectedCuisine?: Cuisine;
  selectedRestaurant?: Restaurant;
  loading: boolean;
  error: string | null;
}

const initialState: CuisineState = {
  cuisines: undefined,
  loading: false,
  error: null,
};

const cuisinesSlice = createSlice({
  name: "cuisines",
  initialState,
  reducers: {
    fetchCuisinesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCuisinesSuccess(state, action: PayloadAction<Cuisines>) {
      state.cuisines = action.payload;
      state.loading = false;
    },
    fetchCuisinesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedCuisine(state, action: PayloadAction<Cuisine>) {
      state.selectedCuisine = action.payload
      state.loading = false;
      state.error = null;
    },
    setSelectedRestaurant(state, action: PayloadAction<Restaurant>) {
      state.selectedRestaurant = action.payload
      state.loading = false;
      state.error = null;
    },
  },
});

export const  {
  fetchCuisinesStart,
  fetchCuisinesSuccess,
  fetchCuisinesFailure,
  setSelectedCuisine,
  setSelectedRestaurant
} = cuisinesSlice.actions;

export const cuisinesData = (state: RootState) =>
  state.cuisines.cuisines || undefined;
export const inLoading = (state: RootState) =>
  state.cuisines.loading
export const hasError = (state: RootState) =>
  state.cuisines.error
export const selectedCuisineData = (state: RootState) =>
  state.cuisines.selectedCuisine || undefined;
export const selectedRestaurantData = (state: RootState) =>
  state.cuisines.selectedRestaurant || undefined;

export default cuisinesSlice.reducer;



