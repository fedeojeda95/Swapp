import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  categoryContainer: {
    height: 150,
    backgroundColor: 'transparent',
  },
  categoryText: {
    color: 'white',
    position: 'absolute',
    right: 20,
    bottom: 10,
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
  },
  title: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 26,
    margin: 22,
  },
  categoryImage: {
    height: '100%',
    width: '100%',
  },
  separator: {
    height: 0.5,
    backgroundColor: 'white',
  },
});
