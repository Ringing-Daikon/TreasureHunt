import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


var Menu = () => {

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'steelblue'}}>
      Choose Your Adventure!
      </Text>
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 25, height: 50, backgroundColor: 'steelblue'}}>
        Menu Item 1 <Icon name="check-circle" size={30} color="white" />
      </Text>
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 25, height: 50, backgroundColor: 'skyblue'}}>
        Menu Item 2 <Icon name="chevron-circle-right" size={30} color="white" />
      </Text>
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 25, height: 50, backgroundColor: 'steelblue'}}>
          List of Puzzles <Icon name="list-ol" size={30} color="white" />
      </Text>
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 25, height: 50, backgroundColor: 'skyblue'}}>
        Treasure Hunt's <Icon name="list" size={30} color="white" />
      </Text>
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 25, height: 50, backgroundColor: 'steelblue'}}>
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

  }

});

export default Menu;