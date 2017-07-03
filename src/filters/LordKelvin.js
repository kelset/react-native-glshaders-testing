import React from 'react';
import PropTypes from 'prop-types';

import { GLSL, Shaders, Node } from 'gl-react';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const shaders = Shaders.create({
  LordKelvin: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      uniform sampler2D inputImageTexture2;
      void main () {
        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        vec2 lookup;
        lookup.y = .5;
        lookup.x = texel.r;
        texel.r = texture2D(inputImageTexture2, lookup).r;
        lookup.x = texel.g;
        texel.g = texture2D(inputImageTexture2, lookup).g;
        lookup.x = texel.b;
        texel.b = texture2D(inputImageTexture2, lookup).b;
        gl_FragColor = vec4(texel, 1.0);
      }`
  }
});

const LordKelvin = ({ children: t }) =>
  (<Node
    shader={shaders.LordKelvin}
    uniforms={{
      inputImageTexture: t,
      inputImageTexture2: resolveAssetSource(require('../resources/kelvinMap.png'))
    }}
  />);

LordKelvin.propTypes = {
  children: PropTypes.object.isRequired
};

export default LordKelvin;
