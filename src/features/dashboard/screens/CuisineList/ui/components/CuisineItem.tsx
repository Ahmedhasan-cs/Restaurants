import {memo, useCallback} from 'react';
import {styles} from '../styles/cuisinItemStyle';
import {Cuisine, CuisineCount} from '@util/api/models/CuisineResponse';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import ChineseImage from '@images/chineseImage.png';
import IndianImage from '@images/indianImage.png';
import ItalianImage from '@images/italianImage.png';
import {capitalizeFirstLetter} from '@util/utils';

interface CuisineItemProps {
  cuisine: CuisineCount;
  handlePress: (cuisine: Cuisine) => void;
}

const CuisineImages: Record<Cuisine, any> = {
  chinese: ChineseImage,
  indian: IndianImage,
  italian: ItalianImage,
};

const CuisineItem = (props: CuisineItemProps) => {
  const {cuisine, handlePress} = props;

  const onClickItem = useCallback(() => {
    handlePress(cuisine.title);
  }, []);
  return (
    <TouchableOpacity onPress={onClickItem}>
      <ImageBackground
        source={CuisineImages[cuisine.title]}
        style={styles.card}
        imageStyle={styles.image}>
        <Text style={styles.title}>{capitalizeFirstLetter(cuisine.title)}</Text>
        <Text style={styles.places}>{cuisine.count} places</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(CuisineItem);
