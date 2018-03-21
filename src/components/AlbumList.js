import React, { Component } from 'react';
import {Text, ScrollView, View, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import {StackNavigator} from 'react-navigation';
import SingleAlbum from './SingleAlbum';
import AlbumContainer from './AlbumContainer';

class AlbumList extends Component{

	constructor(props) {
    super(props);
	this.state = { albums : []};

  }

  static navigationOptions = {
    title: 'AlbumList',
  };

	componentWillMount(){
		console.log('in componentWillMount');
		//debugger;
		//alert("first"+this.state);
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => {
			this.setState({albums : response.data});
		})
		.catch((error) => {
			alert(error);
		});
	}

	renderAlbums(){
		return this.state.albums.map( album => 
			<AlbumContainer  key={album.title}>
				<SingleAlbum key={album.title} album={album} />
			</AlbumContainer>
			);
	}

	 componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

	render(){
    const { navigate } = this.props.navigation;

		return(
		<ScrollView showsVerticalScrollIndicator={false}>
				{this.renderAlbums()}
				<Button title="Go to Jane's profile" 
						onPress={() =>  this.props.navigation.navigate('InputFields') }
      />
      <Button title="Go to Jane's profile" 
						onPress={() =>  this.props.navigation.navigate('InputFields') }
      />
      <Button title="Go to Jane's profile" 
						onPress={() =>  this.props.navigation.navigate('InputFields') }
      />
		</ScrollView>
		);
	}
}


const myScreens = StackNavigator({
  AlbumList: { screen: AlbumList },
});

export default myScreens;