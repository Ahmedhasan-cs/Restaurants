import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {capitalizeFirstLetter} from '@util/utils';

interface HeaderViewProps {
  title?: string;
  backAction?: () => void;
}

const HeaderView = (props: HeaderViewProps): JSX.Element => {
  const {title, backAction} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => backAction && backAction()}
        style={styles.backButton}>
        <Icon name={'arrow-back-ios'} size={20} color={'black'} />
      </TouchableOpacity>

      {title && (
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
      )}
      <View style={styles.rightSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56, // Standard header height
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40, // Ensures alignment
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1, // Allows centering
  },
  rightSpacer: {
    width: 40, // Matches back button width
  },
});

export default memo(HeaderView);
