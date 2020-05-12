import React , {Component} from 'react'
import {  faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SearchForm extends Component {
    
    state = {
        inputMovie : ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value});
    }
    
    _handleSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state
       /* fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+inputMovie)
           .then(res => res.json())
            .then(results => {
              
                const {Search = [], totalResults = '0'} = results   //toma por valores por defecto [] y '0'
                
                this.props.onResults(Search)
               
            })
            */
    }


    render(){
        return(
            <div >
                 <form onSubmit = {this._handleSubmit}>
                 <div className = "input-search">
                    <FontAwesomeIcon className = "li-icon" icon={faSearch} />
                    <input 
                        className=""
                        onChange = {this._handleChange}
                        type="text" 
                        placeholder="Search for Artists, Songs or Podcasts" />


                 </div>
                 <button className="button-search">
                            Search
                    </button>
                
                </form>
             </div>   
        );
    }
}