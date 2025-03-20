import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 8,
    width: '100%',
    aspectRatio: 2.1,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    top: 16,
    left: 16,
    color: '#fff',
  },
  places: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
