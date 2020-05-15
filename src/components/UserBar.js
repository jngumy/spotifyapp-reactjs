import React , {Component} from 'react'

import {faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export class UserBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            profile : {}
        }
    }

    _getUserInfo(){
        let spotifyWebApi = this.props.api;
        spotifyWebApi.getMe()
            .then((response) => {
               console.log(response);
                this.setState({profile: response});
            });
    }

    componentDidMount(){
        this._getUserInfo();
        console.log(this.state.profile);
    }
    render(){
        const {profile} = this.state;
        return(
            <div className = "user-bar">
                <FontAwesomeIcon className = "user-icon" icon={faUser} />
               {profile.display_name}
            </div>
        );
    }
}