import React, {Component} from 'react'
import {NowPlaying} from '../components/NowPlaying'
import {TopTracks} from '../components/TopTracks'
import {UserBar} from '../components/UserBar'
import '../css/App.css';
import '../css/props.css'



export class Home extends Component{
    
    constructor(params){
        super(params);
        this.state = {
            nowPlaying : {
                playing: false,
                name: 'Not checked',
                artist: '',
                image: '',
                device: 'Not checked',
                timestamp: null
              },
              top10songs : []
        }
    }
   
   
   _getTopTracks(){
    
    const spotifyApi = this.props.api;
    const queryParameters = {
        limit:10
    }
 
    spotifyApi.getMyTopTracks(queryParameters)
     .then((response)=>{
            this.setState({top10songs: response.items})

        },
        function (err) {
            console.error(err);
        });
   }

  
    _getNowPlaying(){
        const spotifyApi = this.props.api;
        spotifyApi.getMyCurrentPlaybackState()
          .then((response)=> {
              //console.log(response);
              if (response)
                this.setState({
                    nowPlaying: {
                    playing: true,
                    name: response.item.name,
                    artist: response.item.artists[0].name,
                    image: response.item.album.images[0].url,
                    device: response.device.name,
                    timestamp : new Date(response.timestamp).toLocaleTimeString()
                    }
                })
             else
                this.setState({nowPlaying: {playing:false}});
          })
    
      }

    componentDidMount(){
        this._getNowPlaying();
        this._getTopTracks();
        console.log(this.state.top10songs);
    }
    render(){
        return(
        <div  >
            <UserBar api = {this.props.api}/>
        
           
            <div className ="now-playing">
            {
                (this.state.nowPlaying.playing) 
                ? 
                <NowPlaying 
                    imgsrc ={this.state.nowPlaying.image} 
                    name = {this.state.nowPlaying.name}
                    artist = {this.state.nowPlaying.artist}
                    device = {this.state.nowPlaying.device}
                    timestamp = {this.state.nowPlaying.timestamp}
                />

                : <h1>Not playing</h1>
            }
              <button className = "spot-button" onClick = {() => this._getNowPlaying()}>
                 CHECK NOW PLAYING
              </button>
            </div>
             <TopTracks topSongs = {this.state.top10songs}/>
        </div>
        );
    }
}