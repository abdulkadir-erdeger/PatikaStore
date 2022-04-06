import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    margin: 5,
    flex: 1,
    borderRadius: 10,
  },
  input: {
    padding: 10,
  },
});
