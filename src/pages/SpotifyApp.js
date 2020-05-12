import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
  
import Auth from '../components/Auth';
import logo from '../logo2.png';
import {Home} from './Home';
import {Search} from './Search';
import {MyPlaylists} from './MyPlaylists';
import {LocalPlaylist} from './LocalPlaylist';
import {PlayListDetail} from './PlayListDetail';


import { faHome , faSearch, faMusic, faStore} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default class SpotifyApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    
    render(){
        const routes = [
            {
              path: "/",
              exact: true,
              sidebar: () => <div>home!</div>,
              main: () => <Home  api = {this.props.api} />
            },
            {
                path: "/search",
                sidebar: () => <div>Search Tracks</div>,
                main: () => <Search api = {this.props.api}/>
            },
            {
              path: "/myplaylists",
              sidebar: () => <div>My Playlists!</div>,
              main: () => < MyPlaylists api = {this.props.api} />
            },
            {
                path:'/myplaylists/:id',
                main: () => <PlayListDetail api = {this.props.api}/>,
                exact: true
            },
            {
              path: "/localplaylists",
              sidebar: () => <div>Local Playlists!</div>,
              main: () => <LocalPlaylist api = {this.props.api}/>
            }
          ];
          
        return(
            <Router>
               
                <div style={{top: 0, left: 0, height:'100%', bottom: 0, display: "flex", flexDirection: 'row' }}>
                    <div className ="sidebar fixed">
                        <a href = "/" className = "logo bl">
                            <img alt= "logo" src ={logo} className = "bl"/>
                        </a>

                        <ul className = "nav">
                            <li id ="search">
                                <NavLink activeClassName = "active-li" className = "nav-item"to="/search">  <FontAwesomeIcon className = "li-icon" icon={faSearch} />Search Tracks</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName = "active-li" className = "nav-item" to="/">  <FontAwesomeIcon className = "li-icon" icon={faHome} />Home</NavLink>
                            </li>
                            <li>
                                <NavLink  activeClassName = "active-li" className = "nav-item" to="/myplaylists"> <FontAwesomeIcon className = "li-icon" icon={faMusic} />  My Playlists</NavLink>
                            </li>
                            <li id = "local-playlist">
                                <NavLink activeClassName = "active-li" className = "nav-item" to="/localplaylists">  <FontAwesomeIcon className = "li-icon" icon={faStore} />Local Playlists</NavLink>
                            </li>
                        
                        </ul>
                    </div>

                    <div className = 'container'>
                    <Switch>
                        {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                        ))}
                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}