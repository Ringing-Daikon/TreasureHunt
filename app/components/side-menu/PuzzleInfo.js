import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import MyStatusBar from '../common/MyStatusBar';
import TopNavigationBar from '../common/TopNavigationBar';
import DrawerMenu from '../common/DrawerMenu';

class PuzzleInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var data = this.props.displayData;
    return (
      <View style={styles.background}>

        <View>
          <Text style={styles.title}>{data.riddleTitle}</Text>
          <Text>Location:</Text>
          <View style={styles.location}>
            <Text>{data.location.latitude}   </Text><Text>{data.location.longitude}</Text>
          </View>
          <Text style={styles.title}>{data.riddleTitle}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
  },
  riddle: {

  },
  location: {
    flexDirection: 'row'
  }
});

module.exports = PuzzleInfo;
