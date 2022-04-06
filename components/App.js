import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import veri from '../patikaStore.json';
import Card from './Card';
import Search from './Search';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.baslik}>PATIKASTORE</Text>
      <View style={{height: 50}}>
        <Search />
      </View>

      <FlatList
        data={veri}
        renderItem={({item}) => <Card data={item} />}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baslik: {fontSize: 28, color: '#800080', fontWeight: 'bold', margin: 5},
});
