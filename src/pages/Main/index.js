import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  Pressable,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import styles from './styles';

export default function Main(props) {
  const [persons, setPersons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonModal, setButtonModal] = useState('');
  const [id, setId] = useState(1);
  const [loadFunc, setLoadFunc] = useState(false);

  const handleNavigate = async person => {
    const {navigation} = props;

    navigation.navigate('Person', {person});
  };

  const load = async () => {
    Icon.loadFont();
    const response = await api.get(`/people/${id}`);

    setPersons([...persons, response.data]);

    if (id === 16) {
      setId(id + 2);
    } else {
      setId(id + 1);
    }
  };

  async function storage() {
    const buttonModal1 = await AsyncStorage.getItem('modal');
    if (buttonModal1) {
      setButtonModal(JSON.parse(buttonModal1));
    }
    if (
      buttonModal1 === '"tarde"' ||
      buttonModal1 === '""' ||
      buttonModal1 === null
    ) {
      setTimeout(() => {
        setModalVisible(true);
      }, 45000);
    }
  }

  async function funcao() {
    if (buttonModal === 'tarde') {
      setTimeout(() => {
        setModalVisible(true);
      }, 45000);
    }
  }

  async function selectedModal(option) {
    await setModalVisible(!modalVisible);
    await setButtonModal(option);
    await setLoadFunc(!loadFunc);
  }

  useEffect(() => {
    load();
    storage();
  }, []);

  useEffect(() => {
    funcao();
  }, [loadFunc]);

  useEffect(() => {
    //console.log(buttonModal);
    AsyncStorage.setItem('modal', JSON.stringify(buttonModal));
  }, [buttonModal]);

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
            <View style={styles.viewStyle}>
              <Pressable
                style={[styles.button, {backgroundColor: '#32CD32'}]}
                onPress={() => selectedModal('pagar')}>
                <Text style={styles.textStyle}>Pagar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, {backgroundColor: '#B22222'}]}
                onPress={() => selectedModal('tarde')}>
                <Text style={styles.textStyle}>Mais tarde</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={persons}
        onEndReachedThreshold={1.5}
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
              <Text style={styles.TypeText}>Mass: </Text>
              {item.mass}
            </Text>

            <TouchableOpacity
              style={[styles.buttonPlanet, {backgroundColor: '#dac305'}]}
              onPress={() => {
                handleNavigate(item);
              }}>
              <Text style={styles.textStyle}>Ver detalhes do planeta</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
