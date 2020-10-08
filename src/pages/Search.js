import React, {Component} from 'react';
import SearchForm from '../components/SearchForm'


var busqueda = []
var usedSearch = false

export class Search extends Component {
    
  state = {  usedSearch:false  ,results : []}
    
   /* _searchTracks(inputValue){
        const spotifyApi = this.props.api;
        spotifyApi.searchTracks('duki').then(
            function (data) {
              console.log('Search by'+ inputValue + ':' + data);
            },
            function (err) {
              console.error(err);
            }
          );
    }
    */
   _handleResults = (results) =>{
    console.log(results)
    usedSearch =true
    this.setState({results, usedSearch})
    busqueda = results;
    
  }

  _renderResults(){
    return this.state.results.length === 0
      ? <p style = {{padding:40, fontSize:20}}>Sorry! :( results not found</p>
      : <div className= "container has-background-light is-bold">
            <p>Resultados aqui</p>
       </div>
     
      
  }

    render(){
      
        return(
          <div className = "container-search">

            <h2>Search</h2>
            {/* <SearchForm onResults = {this._handleResults} />*/
            }
            
          </div>
          
        )
    }
}
