import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  Pressable,
  Alert,
} from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Main() {
  const [persons, setPersons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(1);

  const load = async () => {
    const response = await api.get(`/people/${id}`);
    //console.log(response);

    const data = {
      name: response.data.name,
      height: response.data.height,
      mass: response.data.mass,
    };

    console.log('data', response.data);

    setPersons([...persons, response.data]);
    console.log(id);

    if (id === 16) {
      setId(id + 2);
    } else {
      setId(id + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 5000);
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
          //setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Você excedeu o tempo de uso do nosso aplicativo!{'\n\n'} Efetue o
              pagamento para continuar utilizando nossos serviçoes.
            </Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <FlatList
        data={persons}
        onEndReachedThreshold={2}
        onEndReached={load}
        keyExtractor={person => String(person.name)}
        renderItem={({item}) => (
          <View style={styles.User}>
            <Image
              style={styles.Avatar}
              source={{
                uri: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
              }}
            />

            <Text style={styles.Type}>
              <Text style={styles.Name}>Name: </Text>
              {item.name}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}> Height: </Text>
              {item.height}
            </Text>

            <Text style={styles.Type}>
              <Text style={styles.TypeText}>Peso: </Text>
              {item.mass}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
