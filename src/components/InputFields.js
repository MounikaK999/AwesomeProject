import React, {Component} from 'react';
import {Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


class InputFields extends Component{

	static navigationOptions = {
    title: 'InputFields',
  };

	render(){
		    const { navigate } = this.props.navigation;

		return(
		<Text>Input Fileds</Text>
		);
		}
}

const myScreens = StackNavigator({
  InputFeilds : { screen: InputFields },
});

export default myScreens;