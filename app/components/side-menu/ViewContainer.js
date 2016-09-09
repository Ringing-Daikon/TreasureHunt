'use strict'
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

class ViewContainer extends React.Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = React.StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})