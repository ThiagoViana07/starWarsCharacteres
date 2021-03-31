import React from 'react';

import {View, Text, FlatList, Image} from 'react-native';

import styles from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.User}>
        <Image
          style={styles.Avatar}
          source={{
            uri: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
          }}
        />

        <Text style={styles.Type}>
          <Text style={styles.Name}>Name: </Text>
          Luke Skywalker
        </Text>

        <Text style={styles.Type}>
          <Text style={styles.TypeText}> Height: </Text>
          172
        </Text>

        <Text style={styles.Type}>
          <Text style={styles.TypeText}>Peso: </Text>
          77Kg
        </Text>
      </View>
    </View>
  );
}
