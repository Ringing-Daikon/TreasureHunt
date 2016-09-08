'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';


class TreasureHuntMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
    this.watchID = null;
  }

  componentDidMount () {
    this.watchID = navigator.geolocation.watchPosition(({coords}) => {
      var lastPosition = {longitude: coords.longitude, latitude: coords.latitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421};
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  centerOnUser () {
    this.setState({});
  }

  render() {
    return (
      <View style={ styles.map }>
        <MapView
          region={this.state.lastPosition}
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
            />
          )}
        </MapView>
        <TouchableOpacity onPress={this.centerOnUser.bind(this)}>
          <Text style={ styles.button}>Center</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 16
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  }
});

module.exports = TreasureHuntMap;

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