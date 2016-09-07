/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

class TreasureHunt extends Component {
  render() {
    return (
      <MapView
        style={ styles.map }
        showsUserLocation={ true }
        followsUserLocation={ true }
        loadingEnabled={ true }
        showsPointsOfInterest={ false }
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('TreasureHunt', () => TreasureHunt);
