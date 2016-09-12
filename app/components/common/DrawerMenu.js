import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import riddle from '../../assets/riddle3.png';
import logo from '../../assets/Treasure-Hunt2.png';
import map from '../../assets/drawerMap2.png';
import MyStatusBar from './MyStatusBar';


var DrawerMenu = ({puzzlesButtonPressHandler, mapButtonPressHandler}) => {

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#01579B"/>
      <Image source={logo}/><Image/>

      <TouchableOpacity onPress={mapButtonPressHandler}>
        <View style={styles.map}>
         <Image source={map} ></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={puzzlesButtonPressHandler}>
        <View style={styles.riddle}>
         <Image source={riddle} >
          </Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};


var styles = StyleSheet.create({
  riddle: {
    paddingLeft: 10
  },
  map: {
    paddingRight: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  }
});


export default DrawerMenu;