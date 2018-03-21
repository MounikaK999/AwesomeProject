import React from 'react';
import {View, StyleSheet} from 'react-native';

export default AlbumSubContainer = (props) =>{
	return(
			<View style={styles.container}>
			{props.children}
			</View>
		)
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 3,
    marginTop: 3,
    flex:1,
    shadowColor:'#000',
	shadowOffset: {width: 5,height: 5},
	shadowOpacity:1,
	shadowRadius:1,
	elevation: 3,
	borderRadius: 2,
	borderWidth: 1,
	borderColor:'#f5f5f5',
  }
})
