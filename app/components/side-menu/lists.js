import React, {
  Component,
  ListView,
  StyleSheet
} from 'react-native';
import ViewContainer from './ViewContainer';

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

class Lists extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data);
    }
  }

  // getInitialState() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  //   };
  // }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={ styles.statusBar } />
        <ListView
        >
        </ListView>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'AliceBlue'
  }
});



module.exports = Lists;