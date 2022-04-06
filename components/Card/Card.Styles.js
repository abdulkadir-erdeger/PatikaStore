import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img: {
    marginTop: 10,
    height: windowHeight / 3.6,
    width: '90%',
    borderRadius: 10,
  },
  textContainer: {margin: 10, width: '90%'},
  title: {fontWeight: 'bold', color: 'black', fontSize: 16},
  price: {fontWeight: 'bold'},
  stok: {color: 'red', fontWeight: 'bold'},
});
