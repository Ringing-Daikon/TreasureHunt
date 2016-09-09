import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


var DrawerMenu = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
      Choose Your Adventure!
      </Text>
      <Text style={styles.text1}>
        Menu Item 1 <Icon name="check-circle" size={30} color="white" />
      </Text>
      <Text style={styles.text2}>
        Menu Item 2 <Icon name="chevron-circle-right" size={30} color="white" />
      </Text>
      <Text style={styles.text1} >
        List of Puzzles <Icon name="list-ol" size={30} color="white" />
      </Text>
      <Text style={styles.text2}>
        Treasure Hunts <Icon name="list" size={30} color="white" />
      </Text>
      <Text style={styles.text1}>
        Histroy <Icon name="history" size={30} color="white" />
      </Text>
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
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    height: 50,
    backgroundColor: 'steelblue'
  },
  text2: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    height: 50,
    backgroundColor: 'skyblue'
  }
});

export default DrawerMenu;