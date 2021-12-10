import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {Card, Title } from 'react-native-paper';
const { useEffect } = React;

const Pokemon = ({ pokemon }) => {
    /*useEffect(() => {
        console.log(pokemon);
    })*/

    const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    let url = pokemon.url;
    const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/');
    //console.log(idPokemon);
    const link = urlImage + idPokemon[1].substring(0, idPokemon[1].length - 1) + ".svg";
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <View style={styles.containerItem}>

            <Image style={styles.image} resizeMode='contain' source={{ uri: link }} />
            <Text style={styles.pagi}>{name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: -30,
        marginVertical: 12
        

    },
    pagi: {
        color: '#FFFFFF'
    },
    image:{
        width: 150,
        height: 90
    }
});

export default Pokemon;