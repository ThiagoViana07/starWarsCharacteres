import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  Avatar: {
    width: 84,
    height: 84,
    borderRadius: 22,
    backgroundColor: '#fff',
  },

  User: {
    alignItems: 'flex-start',
    marginTop: 0,
    marginRight: 20,
    marginBottom: 30,
  },

  Name: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },

  Type: {
    width: 200,
    fontSize: 16,
    color: '#999',
    padding: 7,
    marginTop: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },

  TypeText: {
    fontWeight: 'bold',
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  viewStyle: {
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    margin: 5,
    elevation: 1,
  },
});
