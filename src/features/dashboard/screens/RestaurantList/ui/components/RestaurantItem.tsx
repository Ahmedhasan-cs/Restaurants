import {memo, useCallback} from 'react';
import {styles} from '../styles/resturantItemStyle';
import {Restaurant} from '@util/api/models/CuisineResponse';
import {View, Text, TouchableOpacity} from 'react-native';
import DottedLine from './DottedLine';
import FastImage from '@d11/react-native-fast-image';

interface ResturantItemProps {
  restaurant: Restaurant;
  handlePress: (resturant: Restaurant) => void;
  testID: string;
}

const RestaurantItem = (props: ResturantItemProps) => {
  const {restaurant, handlePress, testID} = props;

  const onClickItem = useCallback(() => {
    handlePress(restaurant);
  }, []);

  const RestaurantImage: React.FC<{imageUrl: string; isOpened: boolean}> = ({
    imageUrl,
    isOpened,
  }) => (
    <View>
      <FastImage
        style={styles.image}
        source={{uri: imageUrl, priority: FastImage.priority.normal}}
        resizeMode={FastImage.resizeMode.cover}
      />
      {!isOpened && (
        <View style={styles.overlay}>
          <Text style={styles.closedText}>Closed</Text>
        </View>
      )}
    </View>
  );

  const RestaurantInfo: React.FC<{name: string; description: string}> = ({
    name,
    description,
  }) => (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );

  const DeliveryTime: React.FC<{time: string}> = ({time}) => (
    <View style={styles.deliveryTime}>
      <Text style={styles.deliveryText}>{time}</Text>
    </View>
  );

  const RestaurantFooter: React.FC<{
    currency: string;
    deliveryCost: number;
    rating: number;
  }> = ({currency, deliveryCost, rating}) => (
    <View style={styles.bottomRow}>
      <Text style={styles.detailText}>
        🚴 {currency} {deliveryCost}
      </Text>
      <Text style={styles.detailText}>🙂 {rating}</Text>
    </View>
  );

  const RestaurantCard = (): JSX.Element => {
    return (
      <TouchableOpacity onPress={onClickItem} testID={testID}>
        <View style={styles.card}>
          <RestaurantImage
            imageUrl={restaurant.imageUrl}
            isOpened={restaurant.isOpened}
          />

          <View style={styles.infoContainer}>
            <RestaurantInfo
              name={restaurant.restaurantName}
              description={restaurant.shortDesc}
            />
            <DeliveryTime time={restaurant.deliveryTime} />
          </View>

          <DottedLine />

          <RestaurantFooter
            currency={restaurant.currency}
            deliveryCost={restaurant.deliveryCost}
            rating={restaurant.rating}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return <RestaurantCard />;
};

export default memo(RestaurantItem);
