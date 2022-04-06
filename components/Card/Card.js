import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card.Styles';

export default function Card({data}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={{uri: data.imgURL}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>{data.price}</Text>
        {!data.inStock && <Text style={styles.stok}>STOKTA YOK</Text>}
      </View>
    </View>
  );
}
