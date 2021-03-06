import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import DetailPerson from './pages/DetailPerson';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Star Wars"
          component={Main}
          options={{
            headerStyle: {backgroundColor: '#131313'},
            headerTintColor: '#dac305',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Person"
          component={DetailPerson}
          options={{
            headerStyle: {backgroundColor: '#131313'},
            headerTintColor: '#dac305',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
