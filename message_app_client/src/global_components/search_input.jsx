import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

             /*---SEARCH BOX----*/
            <div class="message-search-box">
                <input className="fill-width search-bar-uni message-search-bar bg-dark p-4" placeholder="Lorem Ipsum..." />
            </div>
         
        );
    }
}
 
export default SearchBar;