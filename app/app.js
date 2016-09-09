import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
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
    this.state = {
      isOpen: false

    }; 
  }

  showSideMenu () {
    this.setState({ isOpen: true });
  }

  puzzlesButtonPressHandler() {
    
  }

  treasureHuntsButtonPressHandler() {
    
  }

  render() {
    const menu = <DrawerMenu
      puzzlesButtonPressHandler={this.puzzlesButtonPressHandler}
      treasureHuntsButtonPressHandler={this.treasureHuntsButtonPressHandler}
    />;
    return (
      <SideMenu menu={menu} isOpen={ this.state.isOpen }>
        <View style={ styles.container }>
          <MyStatusBar backgroundColor="#01579B"/>
          <TopNavigationBar showSideMenu={this.showSideMenu.bind(this)} />
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
