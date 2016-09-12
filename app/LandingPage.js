import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import logo from './assets/Treasure-Hunt.png';
import desert from './assets/desert.png';


export default class LandingPage extends Component {

  render () {
    return (
      <View style={style.container}>

        <TouchableOpacity onPress={this.props.hideLandingPage}>
          <View>
           <Image source={desert} >
              <Image source={logo}></Image>
              <Text style={style.text}>Press Start</Text>
            </Image>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 4
    }
  }
});
