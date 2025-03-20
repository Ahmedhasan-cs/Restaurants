import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantDetail from '@features/dashboard/screens/RestaurantDetail/ui/components/RestaurantDetailScreen';
import CuisineList from '@features/dashboard/screens/CuisineList/ui/components/CuisineListScreen';
import {RouteNames} from './DashboardNavigationProps';
import RestaurantList from '@features/dashboard/screens/RestaurantList/ui/components/RestaurantListScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={RouteNames.Cuisines}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteNames.Cuisines} component={CuisineList} />
      <Stack.Screen name={RouteNames.Restaurants} component={RestaurantList} />
      <Stack.Screen name={RouteNames.Detail} component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
