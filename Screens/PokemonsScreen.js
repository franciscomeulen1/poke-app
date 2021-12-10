import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Navbar } from '../components/Navbar';
import { Searchbar } from 'react-native-paper';
import Pokemon from '../components/Pokemon';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';


export class PokemonsScreen extends Component {

  constructor(props){
    super(props);
    this.state = { pokemons: [], search: ''};
    this.getPokemons();
  }
  setPokemons(pokes) {
    this.setState({ pokemons: pokes });
  }
  setSearch(text) {
    this.setState({ search: text });
  }

  getPokemons = async (limit=50, offset=0) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        console.log(response.data.results);
        this.setPokemons(response.data.results);
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <Navbar />
        <Searchbar style={styles.buscador}
        placeholder="Buscar pokemon"
        onChangeText={text => this.setSearch(text)}
        />
      <View>
      <View style={styles.header}>
        <Text style={styles.poke}>Pokedex</Text>
     </View>
     <FlatList
        numColumns = {2}
        data = {this.state.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(this.state.search))}
        //renderItem = {this.renderItem}
        renderItem={({ item }) => {
          return <Pokemon pokemon={item} />
        }}
        keyExtractor={item => `key-${item.name}`}
     />
       
    </View>
    </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1, // Para que me ocupe todo el tamanio de la pantalla 
    paddingTop: -20
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    color: '#FFFFFF',

},
poke:{
    color: '#FFFFFF',
    fontSize: 30,
    marginLeft: 9
},
imag:{
  width: 257,
  height: 103
},
buscador:{
  marginHorizontal: 20,
  marginTop: 5
}
});