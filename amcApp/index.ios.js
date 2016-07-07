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
import Theater from './Theater';
import DontGo from './DontGo';


class amcApp extends Component {
  
  renderScene(route, navigator){
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Lobby') {
        return <Lobby navigator={navigator} />
    }
    if (route.name == 'Theater') {
        return <Theater navigator={navigator} />
    }
    if (route.name == 'DontGo') {
        return <DontGo navigator={navigator} />
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
