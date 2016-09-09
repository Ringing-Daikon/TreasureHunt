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
import Lists from './components/side-menu/lists';


class TreasureHunt extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSideMenuOpen: false,
      screen: 'map'
    };
  }

  showSideMenu () {
    this.setState({ isSideMenuOpen: true });
  }

  puzzlesButtonPressHandler() {
    this.setState({ isSideMenuOpen: false});
    this.setState({screen: 'puzzleList'});
  }

  treasureHuntsButtonPressHandler() {
    
  }

  //  The conditional statements below render different screens depending
  //  on the 'screen' state.
  render() {
    const menu = <DrawerMenu
      puzzlesButtonPressHandler={this.puzzlesButtonPressHandler.bind(this)}
      treasureHuntsButtonPressHandler={this.treasureHuntsButtonPressHandler.bind(this)}
    />;
    if (this.state.screen === 'map') {
      return (
        <SideMenu menu={menu} isOpen={ this.state.isSideMenuOpen }>
          <View style={ styles.container }>
            <MyStatusBar backgroundColor="#01579B"/>
            <TopNavigationBar showSideMenu={this.showSideMenu.bind(this)} />
            <TreasureHuntMap />
          </View>
        </SideMenu>
      );
    }
    else if (this.state.screen === 'puzzleList') {
      return (
        <SideMenu menu={ menu } isOpen={ this.state.isSideMenuOpen }>
          <View style={ styles.container }>
            <Lists sideMenuOpen={this.state.isOpen}/>
          </View>
        </SideMenu>
      );
    }

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TreasureHunt;
