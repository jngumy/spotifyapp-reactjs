import React from 'react'
import {Link} from 'react-router-dom'
export const UserPlaylists = (props) => {
    
    const {items} = props
    return(
        <div>
            <h3 style = {{ textAlign: 'left', width:'90%', marginLeft: 'auto', marginRight: 'auto'}} >My Playlists</h3>
            <div className = "cards-list">
                {
                    items.map((playlist, index) => 
                    <Link key = {index} to ={`/playlist/${playlist.id}`}>
                        <div className = "card " key = {index}>
                            <div className= "card_image">
                                <img alt = "img" src = {playlist.images[0].url} />
                            </div>
                            <div className ="card_title title-white">
                                <h4><strong>{playlist.name}</strong></h4>
                            </div>
                
                        </div>
                    </Link>
                    )
                }
            </div>
        </div>
    );
}