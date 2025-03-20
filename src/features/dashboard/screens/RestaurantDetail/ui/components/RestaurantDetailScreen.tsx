import {styles} from '../styles/restaurantDetail';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DetailNavigationProps} from '@navigators/dashboard/DashboardNavigationProps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from '@d11/react-native-fast-image';
import {useRestaurantDetail} from '../../hooks/useRestaurantDetail';
import {useCallback, useEffect} from 'react';

const RestaurantDetailScreen = ({
  navigation,
}: DetailNavigationProps): JSX.Element => {
  const {error, isLoading, selectedRestaurant} = useRestaurantDetail();

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const InfoBox = ({text}): JSX.Element => (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );

  const Tag = ({label}): JSX.Element => (
    <TouchableOpacity style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </TouchableOpacity>
  );

  const HeaderImage = ({
    imageUrl,
    deliveryCost,
    minOrder,
    handleBack,
  }): JSX.Element => (
    <View style={styles.imageContainer}>
      <FastImage source={{uri: imageUrl}} style={styles.image} />

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon name={'arrow-back-ios'} size={20} color={'white'} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <InfoBox text={`DELIVERY: ${deliveryCost}`} />
        <InfoBox text={`MIN. ORDER: ${minOrder}`} />
      </View>
    </View>
  );

  const RestaurantDetails = ({
    name,
    shortDesc,
    rating,
    speciality,
  }): JSX.Element => (
    <View style={styles.detailsContainer}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.subText}>{shortDesc}</Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>
          <Text style={styles.emoji}>😊</Text> {` Very good, ${rating}`}
        </Text>
        {speciality && <Tag label={speciality} />}
      </View>
    </View>
  );

  const renderContent = ({selectedRestaurant, handleBack}): JSX.Element => {
    return (
      <SafeAreaView style={styles.flexOne} edges={['left', 'right']}>
        <View style={styles.container}>
          <HeaderImage
            imageUrl={selectedRestaurant.imageUrl}
            deliveryCost={selectedRestaurant.deliveryCost}
            minOrder={selectedRestaurant.minOrder}
            handleBack={handleBack}
          />
          <RestaurantDetails
            name={selectedRestaurant.restaurantName}
            shortDesc={selectedRestaurant.shortDesc}
            rating={selectedRestaurant.rating}
            speciality={selectedRestaurant.speciality}
          />
        </View>
      </SafeAreaView>
    );
  };

  return renderContent({selectedRestaurant, handleBack});
};

export default RestaurantDetailScreen;
