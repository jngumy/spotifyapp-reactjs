import React from 'react';

export  const NowPlaying = (props) => {
    const {imgsrc, name, artist, device, timestamp} = props
    return <div >
                   <h2 style = {{'text-align' : 'left'}}> Now playing</h2>
                    <div>
                        <img alt = 'img' src= {imgsrc} style = {{width:300}}></img>
                    </div>
                    <h1> {name} </h1>
                    <h2>{artist}</h2>
                    <div> Device: {device} </div>
                    <h4> Timestamp {timestamp} </h4>
           </div>
}