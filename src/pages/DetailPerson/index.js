import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

import api from '../../services/api';

import axios from 'axios';

import styles from './styles';

export default function DetailPerson(props) {
  const [homeworld, setHomeworld] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const {navigation, route} = props;
    //console.log(route.params);
    navigation.setOptions({title: route.params.person.name});

    load();
  });

  const load = async () => {
    const {route} = props;
    const {person} = route.params;
    const response = await axios.get(`${person.homeworld}`);

    //console.log(response.data);

    setHomeworld(response.data);

    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.User}>
        <Image
          style={styles.Avatar}
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
        />

        {loading ? (
          <View style={styles.loading}>
            <View>
              <ActivityIndicator color="#dac305" size={60} />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Name: </Text>
              {homeworld.name}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Rotation period: </Text>
              {homeworld.rotation_period}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Diameter: </Text>
              {homeworld.diameter}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Climate: </Text>
              {homeworld.climate}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Gravity:</Text>
              {homeworld.gravity}
            </Text>
            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Terrain: </Text>
              {homeworld.terrain}
            </Text>
            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Population: </Text>
              {homeworld.population}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
