import React, {Component} from 'react';
import {SplashScreen} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const Mainstack = StackNavigator({
  SplashScreen: { screen: SplashScreen},
  Login: { screen: LoginScreen},
  Verify: { screen: VerificationScreen},
  Register: { screen: RegisterScreen },
  Home: { screen: HomeScreen},
},
{
    navigationOptions,
    initialRouteName: 'SplashScreen',
});

export default Mainstack;