import React from 'react';
import {Text, Image, View, Button, Linking, TouchableOpacity} from 'react-native';
import AlbumSubContainer from './AlbumSubContainer';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Platform = require('Platform');
const SingleAlbum = (props) => 
{
	return(
		<View>
			<AlbumSubContainer>
						<View style={{flexDirection:'row'}}>
						<View style={{justifyContent:'flex-start'}}>
								<Image style={{width: 50, height: 50, marginRight:10}} source={{uri: props.album.thumbnail_image}}/>
						</View>
						<View style={{flex: 1, justifyContent: 'space-around'}}>
								<Text>Title: {props.album.title}</Text>
								<Text>Artist: {props.album.artist}</Text>
						</View>
						</View>
			</AlbumSubContainer>
			<AlbumSubContainer>
					<Image style={{width: null, height: 360, flex:1}} source={{uri: props.album.image}}/>
			</AlbumSubContainer>
			<AlbumSubContainer>
				<TouchableOpacity>
					<Button  style={{flex:1}} title="Buy Now" onPress={ ()=> Linking.openURL(props.album.url) }/>
				</TouchableOpacity>
			</AlbumSubContainer>

		</View>
		)

};

export default SingleAlbum;