import React, { Component } from 'react';
import {connect} from 'react-redux';

class SearchResults extends React.Component {
    
    render(){
        if (this.props.results === undefined) return (<div></div>)
        let displayResult = function (item) {
            return (<div>item.name</div>)
        }
        return(<div>
                {this.props.results.map(displayResult)}
            </div>)
    }
}
let ConnectedSearchResults = connect (function(store){
    return {
        results: store.searchResults
    }
})(SearchResults)
export default ConnectedSearchResults