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
import Hudson from './filters/Hudson';
import Inkwell from './filters/Inkwell';
import Lokofi from './filters/Lokofi';
import LordKelvin from './filters/LordKelvin';
import Nashville from './filters/Nashville';
import Normal from './filters/Normal';

const filtersArray = [
  'amaro',
  'brannan',
  'earlybird',
  'f1977',
  'hefe',
  'hudson',
  'inkwell',
  'lokofi',
  'lordkelvin',
  'nashville',
  'normal'
];

const filtersComponents = {
  amaro: Amaro,
  brannan: Brannan,
  earlybird: Earlybird,
  f1977: F1977,
  hefe: Hefe,
  hudson: Hudson,
  inkwell: Inkwell,
  lokofi: Lokofi,
  lordkelvin: LordKelvin,
  nashville: Nashville,
  normal: Normal
};

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

            {filtersArray.map((filter) => {
              const FilteredComponent = filtersComponents[filter];

              return (
                <View style={styles.previewContainer} key={filter}>
                  <Surface style={styles.previewImage}>
                    <FilteredComponent>
                      {image}
                    </FilteredComponent>
                  </Surface>
                  <Text style={styles.baseText}>{filter}</Text>
                </View>
              );
            })}

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
