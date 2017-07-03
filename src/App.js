import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import { Surface } from 'gl-react-expo';
import { takeSnapshotAsync } from 'expo';

import StickerPicker from './components/StickerPicker';

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
import Rise from './filters/Rise';
import Sierra from './filters/Sierra';
import Sutro from './filters/Sutro';
import Toaster from './filters/Toaster';
import Valencia from './filters/Valencia';
import Walden from './filters/Walden';
import XproII from './filters/XproII';

const filtersArray = [
  'amaro',
  // 'brannan',
  'earlybird',
  // 'f1977',
  // 'hefe',
  // 'hudson',
  'inkwell',
  // 'lokofi',
  // 'lordkelvin',
  // 'nashville',
  // 'normal',
  // 'rise',
  'sierra',
  // 'sutro',
  'toaster',
  // 'valencia',
  'walden'
  // 'xproII'
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
  normal: Normal,
  rise: Rise,
  sierra: Sierra,
  sutro: Sutro,
  toaster: Toaster,
  valencia: Valencia,
  walden: Walden,
  xproII: XproII
};

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      image: resolveAssetSource(require('./images/photo1.jpg')),
      selectedFilter: 'none',
      sticker: false,
      modalVisible: false,
      imagePreview: ''
    };
  }

  changeFilter = (filter) => {
    this.setState({
      selectedFilter: filter
    });
  };

  changePicture = (image) => {
    this.setState({
      image
    });
  };

  changeSticker = () => {
    this.setState({
      sticker: !this.state.sticker
    });
  };

  closeModal = () => {
    this.setState({
      imagePreview: '',
      modalVisible: false
    });
  };

  saveImage = () => {
    takeSnapshotAsync(this.snapArea, {
      result: 'file',
      format: 'jpeg',
      quality: 0.8
    }).then(
      (uri) => {
        console.log('Image saved to', uri);
        this.setState({ imagePreview: uri, modalVisible: true });
      },
      error => console.error('Oops, snapshot failed', error)
    );
  };

  showBigImage = (selectedFilter, image) => {
    if (selectedFilter !== 'none') {
      const FilteredComponent = filtersComponents[selectedFilter];

      return (
        <View style={styles.imageContainer}>
          <Surface style={styles.singleImage}>
            <FilteredComponent>
              {image}
            </FilteredComponent>
          </Surface>
          <Text style={styles.baseText}>
            {selectedFilter}
          </Text>
          <TouchableOpacity
            style={{ paddingTop: 20 }}
            onPress={() => {
              this.setState({ selectedFilter: 'none' });
            }}
          >
            <Text style={styles.baseText}>Reset</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.singleImage} resizeMode="stretch" />
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.baseText}>(no filter)</Text>
        </View>
      </View>
    );
  };

  filterPreviewList = image =>
    (<ScrollView contentContainerStyle={{ justifyContent: 'center' }} horizontal>
      <View style={{ flexDirection: 'row' }}>
        {filtersArray.map((filter) => {
          const FilteredComponent = filtersComponents[filter];

          return (
            <TouchableOpacity
              style={styles.previewContainer}
              key={filter}
              onPress={() => {
                this.changeFilter(filter);
              }}
            >
              <Surface style={styles.previewImage}>
                <FilteredComponent>
                  {image}
                </FilteredComponent>
              </Surface>
              <Text style={styles.baseText}>
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>);

  renderModal = () =>
    (<Modal
      animationType={'slide'}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {}}
    >
      <View style={{ backgroundColor: '#DDD', flex: 1 }}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>This is what you obtained</Text>
        </View>

        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 300, height: 300 }} source={{ uri: this.state.imagePreview }} />
        </View>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              this.closeModal();
            }}
          >
            <Text style={styles.modalText}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>);

  render() {
    const { image, sticker, selectedFilter } = this.state;

    return (
      <View style={styles.container}>
        {this.renderModal()}

        <View
          style={{
            borderColor: 'lightgray',
            borderWidth: 1,
            marginTop: 24,
            flexDirection: 'row',
            flex: 0.05
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.changePicture(resolveAssetSource(require('./images/photo1.jpg')));
            }}
            style={styles.photoPickerTextContainer}
          >
            <Text style={styles.welcome}>Photo #1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changePicture(resolveAssetSource(require('./images/photo2.jpg')));
            }}
            style={styles.photoPickerTextContainer}
          >
            <Text style={styles.welcome}>Photo #2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changePicture(resolveAssetSource(require('./images/photo3.jpg')));
            }}
            style={styles.photoPickerTextContainer}
          >
            <Text style={styles.welcome}>Photo #3</Text>
          </TouchableOpacity>
        </View>

        <View
          collapsable={false}
          style={{ flex: 0.65 }}
          ref={(snapArea) => {
            this.snapArea = snapArea;
          }}
        >
          <StickerPicker isVisible={sticker}>
            {this.showBigImage(selectedFilter, image)}
          </StickerPicker>
        </View>

        <View style={{ flex: 0.25 }}>
          <View style={{ borderColor: 'lightgray', borderWidth: 1 }}>
            <Text style={styles.welcome}>Pick a filter</Text>
          </View>

          {this.filterPreviewList(image)}
        </View>

        <View
          style={{
            borderColor: 'lightgray',
            borderWidth: 1,
            marginTop: 20,
            flexDirection: 'row',
            flex: 0.05
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              flex: 0.5,
              justifyContent: 'center'
            }}
            onPress={() => {
              this.saveImage();
            }}
          >
            <Text style={styles.welcome}>Save image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: 'lightgray',
              borderWidth: 1,
              flex: 0.5,
              justifyContent: 'center'
            }}
            onPress={() => {
              this.changeSticker();
            }}
          >
            <Text style={styles.welcome}>
              {sticker ? 'Close' : 'Add sticker'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  photoPickerTextContainer: {
    borderColor: 'lightgray',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 0.3,
    justifyContent: 'center'
  },
  modalContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    flex: 0.1,
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  previewContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleImage: {
    width: 250,
    height: 250
  },
  previewImage: {
    width: 65,
    height: 65
  },
  baseText: {
    textAlign: 'center'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16
  }
});
