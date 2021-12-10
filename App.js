import React, { Component } from 'react';
// Cuando cargue la app, quiero hacer una peticion GET --> Usamos useEffect
import { StyleSheet} from 'react-native';
// El componente FlatList recibe un array y me permite recorrerlo de manera facil
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {HomeScreen} from './Screens/HomeScreen';
import {PokemonsScreen} from './Screens/PokemonsScreen';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerStyle:{backgroundColor: '#242324'},
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold'}
          }}/>
          <Stack.Screen name="Pokemons" component={PokemonsScreen} 
          options={{ 
            headerStyle:{backgroundColor: '#000000'},
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold'} 
              }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
