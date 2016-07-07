/**
 * AMC Demo - Damascus Edge - The Forge
 * https://github.com/justchad/amcDemo.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Lobby from './Lobby';


class amcApp extends Component {
  
  renderScene(route, navigator){
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Lobby') {
        return <Lobby navigator={navigator} />
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Main'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('amcApp', () => amcApp);
