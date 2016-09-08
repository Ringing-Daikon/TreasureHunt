import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import MyStatusBar from './components/common/MyStatusBar';
import TopNavigationBar from './components/common/TopNavigationBar';
import TreasureHuntMap from './components/map/Map';
import DrawerMenu from './components/common/DrawerMenu';
import SideMenu from 'react-native-side-menu';


class TreasureHunt extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const menu = <DrawerMenu/>;
    return (
      <SideMenu menu={menu}>
      <View style={ styles.container }>
        <MyStatusBar backgroundColor="#01579B"/>
        <TopNavigationBar />
        <TreasureHuntMap />
      </View>
      </SideMenu>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TreasureHunt;
