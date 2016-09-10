import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';

export default class LandingPage extends Component {

  render () {
    return (
      <View style={style.container}>
       <Image
          source={require('./assets/Treasure-Hunt.png')}
        />
        <Image/>
        <TouchableHighlight onPress={this.props.hideLandingPage}>
          <Text>Press Start!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue'
  },
  text: {
    flex: 1,
    // backgroundColor: 'aliceblue',
    fontWeight: 'bold',
    fontSize: 30
  }
});



