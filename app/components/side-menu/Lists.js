import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import DrawerMenu from '../common/DrawerMenu';
import MyStatusBar from '../common/MyStatusBar';
import {retrievePuzzles} from '../../util/util';
import Icon from 'react-native-vector-icons/Ionicons';
import scrollBackground from '../../assets/scrollBackground.png';

var {height, width} = Dimensions.get('window')

class Lists extends React.Component {
  constructor(props) {
    super(props);

    // Ignore this crazy expression.  It's just something that ListView
    // needs in order to render the list properly.
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.puzzleData)
    }
  }

  // This creates a separator (the line) between each list element.
  // it is passed into the 'ListView' component as a prop.
  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={styles.rowSeparator}
        />
      );
    }

  render() {
    const menu = <DrawerMenu
      puzzlesButtonPressHandler={this.props.puzzlesButtonPressHandler}
      treasureHuntsButtonPressHandler={this.props.treasureHuntsButtonPressHandler}
    />;

    // ListView requires 2 props - dataSource and renderRow. 
    // dataSource is the source of information for this list
    // renderRow takes one item from the data array and turns it into
    //   a formatted row.
    return (
      <View style={styles.background}>
        <Image source={scrollBackground}  style={styles.backgroundImage}>
          <View>
            <Text style={styles.h1}>Riddles</Text>
            <ListView
              style={styles.list}
              dataSource={this.state.dataSource}
              renderSeparator={this._renderSeparator}
              renderRow={(rowData) => {
                return (
                  <TouchableOpacity style={styles.row} onPress={() => this.props.puzzleInfoButtonPressHandler(rowData)}>
                    <Text style={styles.rowInfo}>
                      {rowData.riddleTitle}
                    </Text>
                    <Icon style={styles.icon} name="ios-arrow-forward" size={20} color="darkred" />
                  </TouchableOpacity>
                )
              }}
            >
            </ListView>
          </View>
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'mistyrose'
  },
  backgroundImage:{
    width: width,
    resizeMode: 'stretch',
    height: height - 60
  },
  h1: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 60,
    paddingTop: 15,
    backgroundColor: 'transparent'
  },
  list: {
    height: height
  },
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 20,
    fontSize: 18,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
  rowSeparator: {
    height: 1,
    width: width - 50,
    marginLeft: 25,
    backgroundColor: 'black',
  },
  icon: {
    justifyContent: 'center',
    padding: 15,
    paddingRight: 35,
  }

});

module.exports = Lists;
