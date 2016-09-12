import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import MyStatusBar from '../common/MyStatusBar';
import TopNavigationBar from '../common/TopNavigationBar';
import DrawerMenu from '../common/DrawerMenu';
import scrollBackground from '../../assets/scrollBackground.png';
import Icon from 'react-native-vector-icons/Ionicons';

class PuzzleInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var data = this.props.displayData;
    console.log(data);
    return (
      <View style={styles.background}>
        <Image source={scrollBackground}  style={styles.backgroundImage}>
          <View>
            <TouchableOpacity onPress={this.props.puzzlesButtonPressHandler}>
              <Icon style={styles.backButton} name="ios-arrow-back" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.info, styles.title}>{data.riddleTitle}</Text>
            <Text style={styles.info, styles.treasureHunt}>{data.treasureHuntTitle}</Text>
            <Text style={styles.info, styles.locationTag}>Location:</Text>
            <Text style={styles.info, styles.location}>{data.location.name}</Text>
            <Text style={styles.info, styles.riddle}>{data.riddleContent}</Text>
          </View>
        </Image>

      </View>
    )
  }
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  backgroundImage:{
    width: width,
    resizeMode: 'stretch',
    height: height - 60
  },
  info: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
  treasureHunt: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  locationTag: {
    backgroundColor: 'transparent'
  },
  location: {
    backgroundColor: 'transparent'
  },
  riddle: {
    backgroundColor: 'transparent',
    fontSize: 20,
    width: width-80,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 25
  },
  backButton: {
    marginTop: 25,
    marginLeft: 28,
    fontSize: 25,
    backgroundColor: 'transparent',
  },

});

module.exports = PuzzleInfo;
