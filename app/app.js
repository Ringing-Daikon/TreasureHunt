import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MyStatusBar from './components/common/MyStatusBar';
import TopNavigationBar from './components/common/TopNavigationBar';
import TreasureHuntMap from './components/map/Map';
import DrawerMenu from './components/common/DrawerMenu';
import SideMenu from 'react-native-side-menu';
import Lists from './components/side-menu/Lists';
import PuzzleInfo from './components/side-menu/PuzzleInfo';
import LandingPage from './LandingPage';
import { retrievePuzzles } from './util/util.js';

class TreasureHunt extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSideMenuOpen: false,
      screen: 'map',
      currentRiddle: null
      onLanding: true,
      currentHunt: [],
      puzzleSelection: null
    }; 
  }

  // When component is initially rendered, fetch all puzzles from the database
  // and save it in the currentHunt state.
  componentWillMount() {
    retrievePuzzles((puzzles) => {
      this.setState({
        currentHunt: puzzles, 
        currentRiddle: puzzles.find(({previous})=>previous === 'null')
      });
    });
  }

  hideLandingPage () {
    this.setState({ onLanding: false });
  }

  showSideMenu () {
    this.setState({ isSideMenuOpen: true });
  }

  puzzlesButtonPressHandler() {
    this.setState({ isSideMenuOpen: false });
    this.setState({ screen: 'puzzleList' });
  }

  puzzleInfoButtonPressHandler(rowInfo) {
    console.log(rowInfo);
    this.setState({puzzleSelection: rowInfo})
    this.setState({screen: 'puzzleInfo'});
  }

  mapButtonPressHandler() {
    this.setState({ isSideMenuOpen: false });
    this.setState({ screen: 'map' });
  }

  //  The conditional statements below render different screens depending
  //  on the 'screen' state.
  render() {
    if (this.state.onLanding) {
      return (
          <View style={ styles.container }>
            <MyStatusBar backgroundColor="#01579B"/>
            <LandingPage hideLandingPage={this.hideLandingPage.bind(this)}/>
          </View>
        );
    } else {
      const menu = <DrawerMenu
        puzzlesButtonPressHandler={this.puzzlesButtonPressHandler.bind(this)}
        mapButtonPressHandler={this.mapButtonPressHandler.bind(this)}
      />;

      //Render the map.
      if (this.state.screen === 'map') {
        return (
          <SideMenu menu={menu} isOpen={ this.state.isSideMenuOpen }>
            <View style={ styles.container }>
              <MyStatusBar backgroundColor="#01579B"/>
              <TopNavigationBar showSideMenu={this.showSideMenu.bind(this)} />
              <TreasureHuntMap currentHunt={this.state.currentHunt} currentRiddle={this.state.currentRiddle}/>
            </View>
          </SideMenu>
        );
      }

      //Render the puzzleList.
      else if (this.state.screen === 'puzzleList') {
        return (
          <SideMenu menu={ menu } isOpen={ this.state.isSideMenuOpen }>
            <View style={ styles.container }>
              <MyStatusBar backgroundColor="#01579B"/>
              <TopNavigationBar showSideMenu={this.showSideMenu.bind(this)} />
              <Lists sideMenuOpen={this.state.isOpen}
                     puzzleData={this.state.currentHunt}
                     puzzleInfoButtonPressHandler={this.puzzleInfoButtonPressHandler.bind(this)}
              />
            </View>
          </SideMenu>
        );
      }

      //Render info about a puzzle (after clicking on the item in the puzzleList).
      else if (this.state.screen === 'puzzleInfo') {
        return (
          <SideMenu menu={menu} isOpen={ this.state.isSideMenuOpen }>
            <View style={ styles.container }>
              <MyStatusBar backgroundColor="#01579B" />
              <TopNavigationBar showSideMenu={this.showSideMenu.bind(this)} />
              <PuzzleInfo displayData={this.state.puzzleSelection}/>
            </View>
          </SideMenu>
        );
      }
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TreasureHunt;
