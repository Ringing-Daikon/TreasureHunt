'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

var Rf = 20903520; // mean radius of the earth (feet) at 39 degrees from the equator

// convert degrees to radians
var deg2rad = (deg) => deg * Math.PI / 180; // radians = degrees * pi/180

// round to the nearest 1/1000
var round = (x) => Math.round( x * 1000) / 1000;

// returns the distance between 2 coordinates in feet
var findDistance = function (user, riddle) {
  var t1, n1, t2, n2, lat1, lon1, lat2, lon2, dlat, dlon, a, c, df, ft;
  
  // get values for lat1, lon1, lat2, and lon2
  t1 = user.latitude;
  n1 = user.longitude;
  t2 = riddle.latitude;
  n2 = riddle.longitude;
  
  // convert coordinates to radians
  lat1 = deg2rad(t1);
  lon1 = deg2rad(n1);
  lat2 = deg2rad(t2);
  lon2 = deg2rad(n2);
  
  // find the differences between the coordinates
  dlat = lat2 - lat1;
  dlon = lon2 - lon1;
  
  // here's the heavy lifting
  a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
  c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // great circle distance in radians
  df = c * Rf; // great circle distance in feet
  
  // round the results down to the nearest 1/1000
  ft = round(df);
  
  // display the result
  return ft;
};

class TreasureHuntMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      showCurrentRiddle: false,
      overlay: 'riddle',
    };
    this.watchID = null;
  }

  // get user's initial position and replace the default lastPosition
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(({coords})=>{
      var lastPosition = {longitude: coords.longitude, latitude: coords.latitude};
      this.state.lastPosition = lastPosition;
    });
  }

  // Track the user's location when component is done rendering
  // and check the distance between the user's position and
  // the current riddle
  componentDidMount () {
    this.watchID = navigator.geolocation.watchPosition(({coords}) => {
      var lastPosition = {longitude: coords.longitude, latitude: coords.latitude};
      this.state.lastPosition = lastPosition;
      if (this.props.currentRiddle && this.props.currentRiddle.discovered !== true && findDistance(this.state.lastPosition, this.props.currentRiddle.location) <= this.props.currentRiddle.radius) {
        this.props.currentRiddle.discovered = true;
        this.setState({showCurrentRiddle: true});
      }
    }, null, {enableHighAccuracy: true, distanceFilter: 4});
  }

  // Stop tracking the user's location when the component is removed
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  centerOnUser () {
    this.refs.map.animateToCoordinate(this.state.lastPosition, 200);
  }

  hideCurrentRiddle (e) {
    this.setState({showCurrentRiddle: false, overlay: 'riddle'});
  }

  onInput(input) {
    if (input.toLowerCase() === this.props.currentRiddle.riddleAnswer.toLowerCase()) {
      if (this.props.currentRiddle.next !== 'null') {
        this.state.overlay = 'solved';
      } else {
        this.state.overlay = 'completed';
      }
      this.props.startNextRiddle();
    }
  }

  render() {
    var markers = [];
    var riddleInfo = [];

    // display current riddleif it exists
    if (this.props.currentRiddle) {
      // change pincolor to orange if it was discovered
      var pinColor = (this.props.currentRiddle.discovered) ? '#FFB300' : '#f00';
      markers.push(
        <MapView.Marker key="current" pinColor={pinColor} coordinate={this.props.currentRiddle.location} onSelect={()=>this.props.currentRiddle.discovered && this.setState({showCurrentRiddle: true})} />
      );
    }

    // display all solved riddle
    this.props.solvedRiddles.forEach(({location, treasureHuntTitle, riddleTitle})=>{
      markers.push(
        <MapView.Marker key={treasureHuntTitle + '#' + riddleTitle} pinColor="#00C853" coordinate={location} />
      );
    });

    if (this.state.showCurrentRiddle) {
      var overlayBlock = [];
      if (this.state.overlay === 'riddle') {
        overlayBlock =
         <View style={[ styles.block, styles.riddleBlock ]}>
          <Text style={ styles.blockTitle }>{ this.props.currentRiddle.riddleContent }</Text>
          <View style={ styles.horizontal }>
            <Text style={ styles.input }>Answer: </Text>
            <View style={{borderBottomWidth: 1, width: Dimensions.get('window').width / 2.5}}>
              <TextInput style={ styles.input } onChangeText={this.onInput.bind(this)} autoFocus/>
            </View>
          </View>
        </View>;
      } else if (this.state.overlay === 'solved') {
        overlayBlock = 
        <View style={[ styles.block, styles.solvedBlock ]}>
          <Text style={ styles.blockTitle }>Riddle Solved!</Text>
        </View>;
      } else {
        overlayBlock = <View style={[ styles.block, styles.completedBlock ]}>
          <Text style={ styles.blockTitle }>Treasure Hunt Completed!!</Text>
        </View>;
      }
      riddleInfo = 
      <TouchableOpacity style={ styles.overlay } onPress={this.hideCurrentRiddle.bind(this)}>
        <TouchableWithoutFeedback>
          {overlayBlock}
        </TouchableWithoutFeedback>
      </TouchableOpacity>;
    }
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
          {markers}
        </MapView>
        {riddleInfo}
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
  block: {
    width: Dimensions.get('window').width / 1.2,
    padding: 20
  },
  riddleBlock: {
    backgroundColor: '#FF4081',
  },
  solvedBlock: {
    backgroundColor: '#4CAF50',
  },
  completedBlock: {
    backgroundColor: '#40C4FF',
  },
  blockTitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  horizontal: { 
    flexDirection: 'row', 
    paddingTop: 10
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  input: {
    height: 20, 
    fontSize: 18,
  },
});

module.exports = TreasureHuntMap;
