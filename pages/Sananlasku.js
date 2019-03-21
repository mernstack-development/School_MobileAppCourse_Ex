import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Sananlasku extends Component {
  constructor(props) {
    super(props);
    this.state = { tekija: '', teksti: '' };
  }

  componentDidMount = () => {
    return fetch('http://quotes.rest/qod.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          tekija: responseJson.contents.quotes[0].author,
          teksti: responseJson.contents.quotes[0].quote,
        });
      })
      .catch(error => {
        //console.error(error);
        this.setState({
          tekija: 'Sirpa',
          teksti: 'Koodauksen onnea',
        });
      });
  };

  render() {
    return (
      <View style={styles.sananlasku}>
        <Text style={styles.teksti}>{this.state.teksti}</Text>
        <Text style={styles.teksti}>- {this.state.tekija} -</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sananlasku: {
    flex: 1,
    justifyContent: 'center',
  },
  teksti: {
    alignSelf: 'center',
  },
});

export default Sananlasku;
