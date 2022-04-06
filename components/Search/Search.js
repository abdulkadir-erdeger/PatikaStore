import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Search.Styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};

export default Search;
