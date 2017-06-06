/* @flow */

import React, { PureComponent, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Surface, Shaders, Node, GLSL } from 'gl-react-native';

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform float blue;
        void main() {
        gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
    }`
  }
});

class HelloBlue extends PureComponent {
  static propTypes = {
    blue: PropTypes.float
  };

  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.3, marginTop: 20 }}>
          <Text style={styles.welcome}>
            Test for GL shaders and filters
          </Text>
        </View>
        <Surface width={300} height={300}>
          <HelloBlue blue={0.5} />
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
