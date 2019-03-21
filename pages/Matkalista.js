import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Matkalista extends Component {
  constructor(props) {
    super(props);
    this.state = { matkat: this.props.matkat };
  }

  render() {
    let matkoja = this.state.matkat.map(function(matka, index) {
      return (
        <View key={index}>
          <Text>Otsikko: {matka.otsikko}</Text>
          <Text>Paikkakunta: {matka.paikkakunta}</Text>
          <Text>Päivä: {matka.paiva}</Text>
          <Text>Sää: {matka.saa}</Text>
          <Text>Kuvaus: {matka.kuvaus}</Text>
        </View>
      );
    });
    return <View>{matkoja}</View>;
  }
}

export default Matkalista;
