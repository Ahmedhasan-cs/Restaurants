import {styles} from '../styles/cuisineListStyle';
import {View, FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CuisineItem from './CuisineItem';
import {
  CuisinesNavigationProps,
  RouteNames,
} from '@navigators/dashboard/DashboardNavigationProps';
import {useCuisines} from '@features/dashboard/screens/CuisineList/hooks/useCuisines';
import {Cuisine} from '@util/api/models/CuisineResponse';
import {useEffect} from 'react';

const CuisineListScreen = ({route, navigation}: CuisinesNavigationProps) => {
  const {error, cuisineCounts, handleSelectedCuisine} = useCuisines();

  const handlePress = (cuisine: Cuisine): void => {
    console.log('Cuisine pressed', cuisine);
    handleSelectedCuisine(cuisine);
    navigation.navigate(RouteNames.Restaurants);
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.container}>
        <FlatList
          data={cuisineCounts}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <CuisineItem cuisine={item} handlePress={handlePress} />
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default CuisineListScreen;
