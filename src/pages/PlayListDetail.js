import React , {Component} from 'react'
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class PlayListDetail extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            playlist : {
                img: '',
                type: '',
                name: '',
                likes: 0,
                description: '',
                owner: '',
                duration: '',
                tracks : []
            },
            isLoading: false,
        }
    }
    
    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
    componentDidMount(){
        const spotifyWebApi = this.props.api;
        const {id} = this.props.match.params;

        this.setState({ isLoading: true });
          
        fetch('https://api.spotify.com/v1/playlists/'+ id, { 
            method: 'GET', 
            headers: new Headers({
              'Authorization': 'Bearer '+spotifyWebApi.getAccessToken() 
              
        })})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({playlist: {
                            img : responseJson.images[0].url,
                            name: responseJson.name,
                            type: responseJson.type,
                            likes: responseJson.followers.total,
                            description: responseJson.description,
                            owner: responseJson.owner.display_name,
                            duration: '-',
                            tracks: responseJson.tracks.items
                         }, 
                        isLoading: false});
        });
       
    }

   
    render(){
        const { isLoading , playlist} = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
          }
       
        return(
            
            <div>
                <div className = "playlist-detail-container">
                    <div className = "playlist-img-wrapper">
                        <img className = "playlist-img"alt= {playlist.name} src= {playlist.img}/>
                    </div>
                    <div className = "playlist-info-wrapper">
                        <h4>{playlist.type}</h4>
                        <h1> {playlist.name}</h1>
                        <h4>{playlist.description}</h4>
                        <h4><strong>{playlist.owner}</strong> {playlist.likes} likes </h4>
                    </div>
                 </div>
                <div className= "playlist-tracks-wrapper">
                <ul >
                {
                    playlist.tracks.map((track, index) => (
                        <li className = "li-item" key= {index}>
                            <div className = 'li-title'>
                                <h2>  <FontAwesomeIcon className = "li-icon" icon={faMusic} />{track.track.name}</h2>
                                <h2>{this.millisToMinutesAndSeconds(track.track.duration_ms)}</h2>
                            </div>
                            
                                <h4 >{track.track.artists[0].name} -  {track.track.album.name} </h4>
                        </li>
                    ))
                }
                </ul>
                
                </div>
            </div>
        );
    }
}
