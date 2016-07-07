/**
 * AMC Demo - Damascus Edge - The Forge
 * https://github.com/justchad/amcDemo.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';


//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 70 - 1;
var calculatedHeight    = height - headerHeight - footerHeight;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(0,159,183,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(254,215,102,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(105,103,115,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark   = "'rgba(0,0,0,0.38)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(255,255,255,0.7)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "''rgba(255,255,255,0.5)'";

//Typography

//Sizes
var p                   = 14;
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;

class DontGo extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        
        <TouchableHighlight onPress={ this.navigate.bind(this, 'Theater') } style={styles.fullHeight}>
            <Image
              style={styles.fullImage}
              source={require('./images/walkingaway.png')}
            />
        </TouchableHighlight>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor,
    width: width,
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: dividersDark,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 25,
    width: width
  },
  contentwrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    height: height,
    width: width,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gray,
    width: width,
    height: footerHeight,
    borderTopWidth: 1,
    borderTopColor: dividersDark,
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbottom: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: h1,
    color: primaryTextDark,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullHeight: {
    height:height - 20,
    width:width,
  },
  fullImage: {
    height: height - 20,
    width: width,
  },
});

export default DontGo
