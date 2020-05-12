import React , {Component} from 'react'

export class UserBar extends Component {
    
    state = {
        profile : null
    }

    _getUserInfo(){
        let spotifyWebApi = this.props.api;
        spotifyWebApi.getMe()
            .then((response) => {
                this.setState({profile: response});
            });
    }

    componentDidMount(){
        this._getUserInfo();
        console.log(this.state.profile);
    }
    render(){
        return(
            <div>
                Userinfo
            </div>
        );
    }
}