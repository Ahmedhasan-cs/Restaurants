import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, // Moves shadow down
    shadowOpacity: 1, // Light shadow
    shadowRadius: 5, // Soft edges
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    marginBottom: 9,
    marginLeft: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginRight: 10,
  },
  deliveryTime: {
    backgroundColor: '#e0f2fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    width: 70,
  },
  deliveryText: {
    color: '#007aff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers entire image
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  closedText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
