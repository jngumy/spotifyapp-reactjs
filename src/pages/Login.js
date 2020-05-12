import React from 'react'
import Auth from '../components/Auth'

const Login = (props)=> {
    return(
        <div className = 'login-container fixed'>
           <h1 style ={{color: 'white'}}>Welcome</h1>
            
                <button className = "button-login" onClick = {
                    () => { 
                        Auth.login(()=>{
                            props.history.push("/app");
                        })
                    }
                }>
                    Login with Spotify
                </button>
          
            
        </div>
    )
}

export default Login