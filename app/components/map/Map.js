'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

class TreasureHuntMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    };
    this.watchID = null;
  }

  // Track the user's location when component is done rendering
  componentDidMount () {
    this.watchID = navigator.geolocation.watchPosition(({coords}) => {
      var lastPosition = {longitude: coords.longitude, latitude: coords.latitude};
      this.state.lastPosition = lastPosition;
    });
  }

  // Stop tracking the user's location when the component is removed
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  centerOnUser () {
    this.refs.map.animateToCoordinate(this.state.lastPosition, 200);
  }

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          ref="map"
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
        <TouchableOpacity style={ styles.button } onPress={ this.centerOnUser.bind(this) }>
          <Icon name="md-locate" size={28} color="#0972e3" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 16
  },
  map: {
    flex: 1
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingTop: 6,
    paddingBottom: 3,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#fff',
    shadowOffset: {
      height: 1,
      width: 0
    },
    borderRadius: 30
  },
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