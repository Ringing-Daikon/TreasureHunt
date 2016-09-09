import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


var DrawerMenu = ({puzzlesButtonPressHandler, treasureHuntsButtonPressHandler}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} >
        Choose Your Adventure!
      </Text>


      <TouchableOpacity>
        <Text style={styles.text1}>
          <Icon name="check-circle" size={30} color="white" /> Menu Item 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text2}>
          <Icon name="chevron-circle-right" size={30} color="white" /> Menu Item 2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={puzzlesButtonPressHandler}>
        <Text style={styles.text1}>
          <Icon name="list-ol" size={30} color="white" /> Current Puzzles
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text2}>
          <Icon name="list" size={30} color="white" /> Treasure Hunts
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text1}>
          <Icon name="history" size={30} color="white" /> Histroy
        </Text>
      </TouchableOpacity>
    </View>
  );
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'center',
    backgroundColor: 'aliceblue'
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'steelblue'
  },
  text1: {
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    height: 50,
    backgroundColor: 'steelblue'
  },
  text2: {
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    height: 50,
    backgroundColor: 'skyblue'
  }
});

export default DrawerMenu;