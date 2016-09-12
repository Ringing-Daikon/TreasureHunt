import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import MyStatusBar from '../common/MyStatusBar';
import TopNavigationBar from '../common/TopNavigationBar';
import DrawerMenu from '../common/DrawerMenu';
import scrollBackground from '../../assets/scrollBackground.png';


class PuzzleInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var data = this.props.displayData;
    return (
      <View style={styles.background}>
        <Image source={scrollBackground}  style={styles.backgroundImage}>
          <View>
            <Text style={styles.info, styles.title}>{data.riddleTitle}</Text>
            <Text style={styles.info, styles.treasureHunt}>{data.treasureHuntTitle}</Text>
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
    marginTop: 80,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
  treasureHunt: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  riddle: {
    backgroundColor: 'transparent',
    fontSize: 20,
    width: width-80,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 25
  },
  location: {
    flexDirection: 'row'
  }
});

module.exports = PuzzleInfo;
