import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import DrawerMenu from '../common/DrawerMenu';
import MyStatusBar from '../common/MyStatusBar';
// 1- format list.
// 2- make list buttons clickable
// 3- test utility functions - use real data


//puzzle titles
// dummydata
var data = [{
  title: 'The Goat of Hack Reactorasdff asdf',
},
{
  title: 'Talking with friends'
},
{
  title: 'Sword in the water'
}];

class Lists extends React.Component {
  constructor(props) {
    super(props);

    // Ignore this crazy expression.  It's just something that ListView
    // needs in order to render the list properly.
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
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
      <View style={styles.viewContainer}>
        <MyStatusBar backgroundColor="#01579B"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
          style={styles.list}
        >
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'aliceblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  list: {
    backgroundColor: 'aliceblue'
  }
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // wrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingRight: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#e9e9e9',
  // },
  // text: {
  //   fontSize: 24,
  //   fontWeight: "100",
  //   color: 'black',
  // },
  // sectionHeader: {
  //   backgroundColor: '#48D1CC'
  // },
  // sectionHeaderText: {
  //   fontFamily: 'AvenirNext-Medium',
  //   fontSize: 16,
  //   color: 'white',
  //   paddingLeft: 10
  // },

});

module.exports = Lists;
