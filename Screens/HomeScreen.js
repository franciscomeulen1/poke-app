import React, { Component } from 'react';
// Cuando cargue la app, quiero hacer una peticion GET --> Usamos useEffect
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Button } from 'react-native-paper';

const imgURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

export class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.containerhome}>
            <Image style={styles.imag} resizeMode='contain' source={{uri: imgURL}} />
          <Text style={styles.welcome}>Bienvenido!</Text>
          <Button
          style={styles.buttonInicial}
            onPress={() => this.props.navigation.navigate("Pokemons")} //Me redirige a la ruta Details, componente DetailsScreen
            title="Consultar Criptos"
            color="#E3D61B"
            mode="contained"> Consultar Pokemons </Button>
          <StatusBar style="auto" />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    containerhome: {
      flex: 1,
      backgroundColor: 'black', 
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonInicial:{
      marginBottom: 150
    },
    welcome:{
      color: '#fff',
      fontSize: 30,
      marginBottom: 50,
      marginTop: 35
    },
    imag:{
        width: 257,
        height: 103
    }
  })