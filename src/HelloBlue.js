/* @flow */

import React, { PureComponent, PropTypes } from 'react';
import { Shaders, GLSL, Node } from 'gl-react';

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

export default class HelloBlue extends PureComponent {
  static propTypes = {
    blue: PropTypes.number.isRequired
  };

  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}
