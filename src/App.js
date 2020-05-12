import React , {Component} from 'react';
import Spotify from 'spotify-web-api-js';
import {BrowserRouter ,Switch,Route} from "react-router-dom";
import {ProtectedRoute} from '../src/components/ProtectedRoute';
import './css/App.css';
import './css/props.css'


import Login from '../src/pages/Login';
import SpotifyApp from './pages/SpotifyApp'
import NotFound from './pages/NotFound'

//import {SideBar} from '../src/components/Sidebar'
//import {SongDetail} from '../src/pages/SongDetail'
//import {NotFound} from '../src/pages/NotFound'

const spotifyApi = new Spotify();

class App extends Component {
  
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn : params.access_token ? true : false,
    }
    if(params.access_token){
      spotifyApi.setAccessToken(params.access_token);
    }
  }
  
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render(){
    return (
      
      <div className = 'App'>
        <Switch>
          <Route  path = "/"  render={(props) => <SpotifyApp {...props} isAuthed={true} api = {spotifyApi} />}/>
          <Route path = "*" component = {NotFound} />
        </Switch>

       
      
        
      </div>
      
      );
  }
  
}

export default App;
