import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Saa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paikkakunta: '',
      kuva: '',
      lampotila: '',
      kuvaus: '',
      tuuli: '',
    };
  }
 
  componentDidMount = () => {
    return fetch(
      'http://api.openweathermap.org/data/2.5/weather?lang=fi&lat=60.17&lon=24.94&units=metric&APPID=32f1264bba3945837fa37cc1c29b4db1'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          paikkakunta: responseJson.name,
          lampotila: responseJson.main.temp,
          kuvaus: responseJson.weather[0].description,
          tuuli: responseJson.wind.speed,
          kuva:
            'http://api.openweathermap.org/img/w/' +
            responseJson.weather[0].icon,
        });
      })
      .catch(error => {
        alert('Säätietoja ei saatu haettua. Lisää oma APPID');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.otsikko}>{this.state.paikkakunta}</Text>
        <View style={ styles.saatieto }>
          <Image source={{ uri: this.state.kuva }} style={styles.kuva} />
          <View>
            <Text>{this.state.lampotila} astetta</Text>
            <Text>{this.state.kuvaus} </Text>
            <Text>{this.state.tuuli} m/s</Text>
          </View>
        </View>
      </View>
    ); // return
  } // render
} // class Saa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  otsikko: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  kuva: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  saatieto: {
    flexDirection: 'row',
  }
});

export default Saa;
