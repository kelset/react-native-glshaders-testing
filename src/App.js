/* @flow */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Surface } from 'gl-react-native';

import HelloBlue from './HelloBlue';

const App = () =>
  (<View style={styles.container}>
    <View style={{ flex: 0.7, marginTop: 20, alignItems: 'center' }}>
      <Surface style={{ width: 300, height: 300 }}>
        <HelloBlue blue={0.5} />
      </Surface>
    </View>
    <View style={{ flex: 0.3 }}>
      <Text style={styles.welcome}>
        Test for GL shaders and filters
      </Text>
    </View>
  </View>);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
