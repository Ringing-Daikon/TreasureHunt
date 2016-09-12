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
              <Icon style={styles.backButton} name="ios-arrow-back" size={20} color="darkred" />
            </TouchableOpacity>
            <Text style={[styles.info, styles.title]}>{data.riddleTitle}</Text>
            <View
              style={styles.titleSpacer}
            />
            <Text style={[styles.info, styles.treasureHunt]}>{data.treasureHuntTitle}</Text>
            <Text style={[styles.info, styles.locationTag]}>at</Text>
            <Text style={[styles.info, styles.location]}>{data.location.name}</Text>
            <View
              style={styles.titleSpacer}
            />
            <Text style={[styles.info, styles.riddle]}>{data.riddleContent}</Text>
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
    backgroundColor: 'black',
  },
  backgroundImage:{
    width: width,
    resizeMode: 'stretch',
    height: height - 60
  },
  info: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontWeight: '900',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 15,
  },
  titleSpacer: {
    height: 1,
    width: width - 80,
    marginLeft: 40,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#b31217',
  },
  treasureHunt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  locationTag: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  location: {
    backgroundColor: 'transparent',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  riddle: {
    backgroundColor: 'transparent',
    fontSize: 21,
    width: width-80,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 25
  },
  backButton: {
    marginTop: 26,
    marginLeft: 28,
    fontSize: 25,
    backgroundColor: 'transparent',
  },

});

module.exports = PuzzleInfo;
