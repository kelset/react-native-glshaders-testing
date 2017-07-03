import React from 'react';
import PropTypes from 'prop-types';

import { GLSL, Shaders, Node } from 'gl-react';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const shaders = Shaders.create({
  Inkwell: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      uniform sampler2D inputImageTexture2;
      void main () {
        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        texel = vec3(dot(vec3(0.3, 0.6, 0.1), texel));
        texel = vec3(texture2D(inputImageTexture2, vec2(texel.r, .83333)).r);
        gl_FragColor = vec4(texel, 1.0);
      }`
  }
});

const Inkwell = ({ children: t }) =>
  (<Node
    shader={shaders.Inkwell}
    uniforms={{
      inputImageTexture: t,
      inputImageTexture2: resolveAssetSource(require('../resources/inkwellMap.png'))
    }}
  />);

Inkwell.propTypes = {
  children: PropTypes.object.isRequired
};

export default Inkwell;
