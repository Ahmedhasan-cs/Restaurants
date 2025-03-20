import {styles} from '../styles/restaurantListStyle';
import {View, FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  RestaurantsNavigationProps,
  RouteNames,
} from '@navigators/dashboard/DashboardNavigationProps';
import {Restaurant} from '@util/api/models/CuisineResponse';
import {useResturants} from '../../hooks/useResturants';
import RestaurantItem from './RestaurantItem';
import HeaderView from '@components/HeaderView';
import {useCallback, useEffect} from 'react';

const RestaurantListScreen = ({
  route,
  navigation,
}: RestaurantsNavigationProps) => {
  const {
    selectedCuisine,
    error,
    isLoading,
    resturants,
    handleSelectedRestaurant,
  } = useResturants();

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  const handlePress = useCallback((resturant: Restaurant) => {
    handleSelectedRestaurant(resturant);
    navigation.navigate(RouteNames.Detail);
  }, []);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.container}>
        <HeaderView title={selectedCuisine} backAction={handleBack} />
        <FlatList
          data={resturants}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RestaurantItem
              restaurant={item}
              handlePress={handlePress}
              testID="cuisine-item"
            />
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantListScreen;
