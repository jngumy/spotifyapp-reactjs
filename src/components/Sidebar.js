import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
  
import logo from '../logo2.png';
import {Home} from '../pages/Home'
import {Search} from '../pages/Search'
import {MyPlaylists} from '../pages/MyPlaylists'
import {LocalPlaylist} from '../pages/LocalPlaylist'

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <Home/>
    },
    {
        path: "/search",
        sidebar: () => <div>Search Tracks</div>,
        main: () => <Search />
    },
    {
      path: "/myplaylists",
      sidebar: () => <div>My Playlists!</div>,
      main: () => < MyPlaylists/>
    },
    {
      path: "/localplaylists",
      sidebar: () => <div>Local Playlists!</div>,
      main: () => <LocalPlaylist />
    }
  ];

export class SideBar extends Component {
   
 
    render(){
        
        
        return(
            <Router>
               
                <div style={{top: 0, left: 0, height:'100%', bottom: 0, display: "flex", flexDirection: 'row' }}>
                    <div className ="sidebar fixed">
                        <a href = "/" className = "logo bl">
                            <img alt= "logo" src ={logo} className = "bl"/>
                            
                        </a>

                        <ul className = "nav">
                            <li id ="search">
                          
                                <NavLink activeClassName = "active-li" className = "nav-item"to="/search"> Search Tracks</NavLink>
                               
                            </li>
                            <li>
                                <NavLink exact activeClassName = "active-li" className = "nav-item" to="/">Hwome</NavLink>
                            </li>
                            <li>
                                <NavLink  activeClassName = "active-li" className = "nav-item" to="/myplaylists">My Playlists</NavLink>
                            </li>
                            <li id = "local-playlist">
                                <NavLink activeClassName = "active-li" className = "nav-item" to="/localplaylists">Local Playlists</NavLink>
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