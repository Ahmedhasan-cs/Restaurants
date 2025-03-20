import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 20,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginRight: 15,
  },
  infoText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  emoji: {
    fontSize: 18,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    marginTop: 10,
    fontWeight: 'bold',
  },
  tag: {
    backgroundColor: '#E0F2FE',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  tagText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
