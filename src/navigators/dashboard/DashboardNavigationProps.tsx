import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type AppStackNavigatorParamList = {
  Cuisines: undefined;
  Restaurants: undefined;
  Detail: undefined;
};

export enum RouteNames {
  Cuisines = 'Cuisines',
  Restaurants = 'Restaurants',
  Detail = 'Detail',
}

export type CuisinesNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.Cuisines
>;
export type RestaurantsNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.Restaurants
>;

export type DetailNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.Detail
>;
