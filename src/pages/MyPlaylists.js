import React, {Component} from 'react'
import {UserPlaylists} from '../components/UserPlaylists'

import '../css/App.css';
import '../css/props.css'

export class MyPlaylists extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        const spotifyWebApi = this.props.api;
        spotifyWebApi.getUserPlaylists()
         .then((response)=>{
             console.log(response);
            this.setState({items: response.items});
         })
    }
    
    render(){
        return(
        <UserPlaylists
            items = {this.state.items}
        />
        );
    }
}