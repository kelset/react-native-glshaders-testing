import React, { PropTypes } from 'react';

import { GLSL, Shaders, Node } from 'gl-react';

const shaders = Shaders.create({
  Normal: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main () {
        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        gl_FragColor = vec4(texel, 1.0);
      }`
  }
});

const Normal = ({ children: t }) =>
  (<Node
    shader={shaders.Normal}
    uniforms={{
      inputImageTexture: t
    }}
  />);

Normal.propTypes = {
  children: PropTypes.object.isRequired
};

export default Normal;
