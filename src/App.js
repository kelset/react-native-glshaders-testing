/* @flow */

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import { Surface } from 'gl-react-native';

import Amaro from './filters/Amaro';
import Brannan from './filters/Brannan';
import Earlybird from './filters/Earlybird';
import F1977 from './filters/F1977';
import Hefe from './filters/Hefe';

const App = () => {
  const image = resolveAssetSource(require('./images/yacht-test.jpg'));

  return (
    <View style={styles.container}>
      <View style={{ borderColor: 'lightgray', borderWidth: 1, marginTop: 20 }}>
        <Text style={styles.welcome}>
          Preview
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/yacht-test.jpg')}
          style={styles.singleImage}
          resizeMode="stretch"
        />

      </View>

      <View style={{ flex: 0.3 }}>
        <View style={{ borderColor: 'lightgray', borderWidth: 1 }}>
          <Text style={styles.welcome}>
            Pick a filter
          </Text>
        </View>

        <ScrollView contentContainerStyle={{ justifyContent: 'center' }} horizontal>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.previewContainer}>
              <Surface style={styles.previewImage}>
                <Amaro>
                  {image}
                </Amaro>
              </Surface>
              <Text style={styles.baseText}>Amaro</Text>
            </View>

            <View style={styles.previewContainer}>
              <Surface style={styles.previewImage}>
                <Brannan>
                  {image}
                </Brannan>
              </Surface>
              <Text style={styles.baseText}>Brannan</Text>
            </View>
            <View style={styles.previewContainer}>
              <Surface style={styles.previewImage}>
                <Earlybird>
                  {image}
                </Earlybird>
              </Surface>
              <Text style={styles.baseText}>Earlybird</Text>
            </View>

            <View style={styles.previewContainer}>
              <Surface style={styles.previewImage}>
                <F1977>
                  {image}
                </F1977>
              </Surface>
              <Text style={styles.baseText}>F1977</Text>
            </View>

            <View style={styles.previewContainer}>
              <Surface style={styles.previewImage}>
                <Hefe>
                  {image}
                </Hefe>
              </Surface>
              <Text style={styles.baseText}>Hefe</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  },
  imageContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  previewContainer: {
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleImage: {
    width: 320,
    height: 320
  },
  previewImage: {
    width: 65,
    height: 65
  },
  baseText: {
    textAlign: 'center'
  }
});
