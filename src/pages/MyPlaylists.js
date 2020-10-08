import React, {Component} from 'react'
import {UserPlaylists} from '../components/UserPlaylists'
import {UserBar} from '../components/UserBar'
import BabelLoading from 'react-loadingg/lib/BabelLoading'
import '../css/App.css';
import '../css/props.css'

export class MyPlaylists extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            loaded: false
        }
    }
    componentDidMount(){
        const spotifyWebApi = this.props.api;
        spotifyWebApi.getUserPlaylists()
         .then((response)=>{
             console.log(response);
            this.setState({items: response.items, loaded: true});
         })
    }
    
    render(){
        const loaded = this.state.loaded;
        let content;

        if(loaded)
            content = <UserPlaylists items = {this.state.items} />
        else
            content = <BabelLoading style ={{margin: 'auto', left: '20%',right:0,top:0,bottom:0, position:'fixed'}}  color = '#24c21b' className = 'loader'/> 
        return(
            <div>
                <UserBar api = {this.props.api}/>
                {content}
            </div>
     
        );
    }
}