import React from 'react'

export const TopTracks = (props) => {
    const  {topSongs} = props;
    return(
        <div>
                  <div style = {{ textAlign: 'left', width:'90%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <h3  >User's Top 10 tracks</h3>
                  </div>
                
                  <div className = "cards-list">
                      {topSongs.map((item, index) => (
                        <div className = "card " key= {index}>
                            <div className= "card_image">
                             <img  alt= {index} src= {item.album.images[1].url}></img>
                            </div>
                            <div className ="card_title title-white">
                              <div style = {{'padding': '12px 0'}}>
                                   <strong>{item.name}</strong>
                               <br/>
                               <div style = {{color: 'grey'}}>{item.artists[0].name}</div>
                               
                              </div>
                             
                            </div>
                        </div>
                      ))}
                  </div>
        </div>
    )
}