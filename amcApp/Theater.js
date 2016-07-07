/**
 * UMB Demo - Damascus Edge - The Forge
 * https://github.com/justchad/geha_blueberry_demo
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

class Theater extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        
        <View style={styles.headerwrapper}>
            <View style={styles.headernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                        <Image
                          style={styles.amcHeader}
                          source={require('./images/amcheadD.png')}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Order Food</Text>
                </View>
                
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                        <Image
                          style={styles.regHeader}
                          source={require('./images/registerheadD.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
        <View style={styles.contentwrapper}>
            <Image
              style={styles.contentImage}
              source={require('./images/combospageD.png')}
            />
        </View>

        <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Image
                          style={styles.footerImage}
                          source={require('./images/moviesD.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'DontGo') } style={styles.buttonbottom}>
                        <Image
                          style={styles.footerImage}
                          source={require('./images/rewardsD.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Lobby') } style={styles.buttonbottom}>
                        <Image
                          style={styles.footerImage}
                          source={require('./images/orderfoodD.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Theater') } style={styles.buttonbottom}>
                        <Image
                          style={styles.footerImage}
                          source={require('./images/findtheaterD.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Image
                          style={styles.footerImage}
                          source={require('./images/other2.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222729',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222729',
    width: width,
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: dividersDark,
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
    width: width
  },
  contentwrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    height: contentHeight,
    width: width,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222729',
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
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
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
  title: {
    fontSize: h4,
    color: '#e2383f',
  },
  titleWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImage: {
    width: width,
    height: calculatedHeight,
  },
  footerImage: {
    width: width / 5,
    height: 60,
  },
  amcHeader: {
    width: 85,
    height: 25,
  },
  regHeader: {
    width: 55,
    height: 30,
  },
});

export default Theater
