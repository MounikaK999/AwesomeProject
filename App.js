/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Header from './src/components/header'; 
import AlbumList from './src/components/AlbumList'; 
import InputFields from './src/components/InputFields'; 

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <AlbumList />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    shadowColor:'#000',
    shadowOffset: {width: 0,height: 15}
  }
})


const myScreens = StackNavigator({
  Home: { screen: App },
});

export default myScreens;