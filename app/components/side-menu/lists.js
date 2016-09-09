import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text
} from 'react-native';
// import ViewContainer from './ViewContainer';

//puzzle titles
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  // getInitialState() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  //   };
  // }

        // <StatusBarBackground style={ styles.statusBar } />

  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        >
        </ListView>
    );
  }
}

// const styles = StyleSheet.create({
//   statusBar: {
//     backgroundColor: 'AliceBlue'
//   }
// });



module.exports = Lists;