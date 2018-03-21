// importing libraries

import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Making a component

export default class Header extends Component{
	render(){
		return (
			<View style={styles.viewStyle}>
			<Text style={styles.textStyle}> Albums! </Text>
			</View>
		);

	}
}

const styles = StyleSheet.create({
	textStyle:{
		fontSize:20,
	},
	viewStyle:{
		backgroundColor :'#fefefe',
		justifyContent : 'center',
		alignItems :'center',
		height: 60,
		padding: 15,
		shadowColor: 'black',
		shadowOffset: {width: 0, height: 12},
		elevation:1,
		 shadowColor:'#000',
	shadowOffset: {width: 5,height: 5},
	shadowOpacity:1,
	shadowRadius:1,
	elevation: 3,
	borderRadius: 2,
	borderWidth: 1,
	borderColor:'#f5f5f5',
	}
});
