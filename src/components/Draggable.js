// @flow

// original source: https://github.com/jevakallio/react-native-snap-drag/blob/master/index.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder } from 'react-native';

const YES = () => true;
// const NO = (evt, gestureState) => false;

export default class Draggable extends Component {
  static propTypes = {
    dragStarted: PropTypes.func.isRequired,
    dragEnded: PropTypes.func.isRequired,
    xLocked: PropTypes.bool,
    yLocked: PropTypes.bool,
    children: PropTypes.object.isRequired,
    style: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      draggable: new Animated.ValueXY(),
      dragging: false
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: YES,
      onStartShouldSetPanResponderCapture: YES,
      onMoveShouldSetPanResponder: YES,
      onMoveShouldSetPanResponderCapture: YES,
      onPanResponderTerminationRequest: YES,
      onShouldBlockNativeResponder: YES,
      onPanResponderGrant: () => {
        this.state.draggable.extractOffset();
        if (this.props.dragStarted) {
          this.props.dragStarted();
        }
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.draggable.x, dy: this.state.draggable.y }
      ]),
      onPanResponderRelease: () => {
        if (this.props.dragEnded) {
          this.props.dragEnded(true);
        }
      },
      onPanResponderTerminate: () => {
        if (this.props.dragEnded) {
          this.props.dragEnded(false);
        }
      }
    });
  }

  render() {
    const animated = {
      transform: []
    };

    if (!this.props.xLocked) {
      animated.transform.push({ translateX: this.state.draggable.x });
    }

    if (!this.props.yLocked) {
      animated.transform.push({ translateY: this.state.draggable.y });
    }

    return (
      <Animated.View style={[this.props.style, animated]} {...this.panResponder.panHandlers}>
        {this.props.children}
      </Animated.View>
    );
  }
}
