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
  View,
  Image,
  StatusBar
} from 'react-native';
import MapView from 'react-native-maps';

const MyStatusBar = ({backgroundColor}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
  </View>
);

class TreasureHunt extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <MyStatusBar backgroundColor="#01579B" />


        <View style={ styles.nav }>
          <Image source={require('./assets/menu.png')} />
          <Text style={ styles.name }>TreasureHunt</Text>
          <View style={ styles.navItem}></View>
        </View>
        <MapView
          style={ styles.map }
          showsUserLocation={ true }
          followsUserLocation={ true }
          loadingEnabled={ true }
          showsPointsOfInterest={ false }
        >
          {markers.map((coord, i)=>
            <MapView.Marker
              key={i}
              coordinate={coord}
              image={allenImg}
            />
          )}
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: 20,
  },
  top: {
    height: 20,
    backgroundColor: '#000',
  },
  nav: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#0288D1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  },
  navItem: {
    width: 20
  },
  map: {
    flex: 16
  },
});

// dummy data
const markers = [
  {
    latitude: 37.7823,
    longitude: -122.408
  },
  {
    latitude: 37.7838,
    longitude: -122.408
  },
  {
    latitude: 37.7850,
    longitude: -122.41
  },
  {
    latitude: 37.782,
    longitude: -122.4105
  },
  {
    latitude: 37.7846,
    longitude: -122.407
  },
];

const allenImg = require('./assets/allen.png');

AppRegistry.registerComponent('TreasureHunt', () => TreasureHunt);
