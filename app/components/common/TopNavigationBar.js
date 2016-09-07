'use strict'

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
var menuImage = require('../../assets/menu.png');


var TopNavigationBar = () => (
  <View style={ styles.nav }>
    <Image source={menuImage} />
    <Text style={ styles.name }>TreasureHunt</Text>
    <View style={ styles.navItem}></View>
  </View>
);

module.exports = TopNavigationBar;

const styles = StyleSheet.create({
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
});