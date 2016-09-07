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
import MyStatusBar from './components/common/MyStatusBar';
import TopNavigationBar from './components/common/TopNavigationBar';
import TreasureHuntMap from './components/map/Map';

class TreasureHunt extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <MyStatusBar backgroundColor="#01579B" />
        <TopNavigationBar />
        <TreasureHuntMap />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = TreasureHunt;
