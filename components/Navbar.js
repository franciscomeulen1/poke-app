import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const imgURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

export class Navbar extends Component {
    render() {
        return (
            <View style={styles.navi}>
                <Image style={styles.imag} resizeMode='contain' source={{uri: imgURL}} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navi: {
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10
    },
    imag:{
        width: 257,
        height: 103
    }
});