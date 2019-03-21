import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Matkalista from './pages/Matkalista';

const data = [
  {
    otsikko: 'Lomalla',
    paiva: '6.6.2019',
    paikka: 'Lohja',
    saa: 'Aurinkoinen, +10',
    kuvaus: 'Lomalla Lohjalla',
    kuva: 'https://myy.haaga-helia.fi/~marsi/pictures/heijastus.PNG',
  },
  {
    otsikko: 'Lomalla pohjoisessa',
    paiva: '8.6.2019',
    paikka: 'Sletner Fyr',
    saa: 'Pieni vesisade, +9',
    kuvaus: 'Euroopan pohjoisin paikka',
    kuva: 'https://myy.haaga-helia.fi/~marsi/pictures/majakka.PNG',
  },
  {
    otsikko: 'Sukulomassa',
    paiva: '20.6.2019',
    paikka: 'Keski-Suomi',
    saa: 'Pilvinen, +5',
    kuvaus: 'Sukuloimassa maalla',
    kuva: 'https://myy.haaga-helia.fi/~marsi/pictures/lumpeet.PNG',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Matkalista matkat={ data } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
