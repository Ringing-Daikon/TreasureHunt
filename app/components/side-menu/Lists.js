import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import ViewContainer from './ViewContainer';
import SideMenu from 'react-native-side-menu';
import DrawerMenu from '../common/DrawerMenu';

//puzzle titles
// dummydata
var data = [{
  title: 'The Goat of Hack Reactor',
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
      <View style={styles.background}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        >
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'aliceblue'
  }
  

});



module.exports = Lists;
