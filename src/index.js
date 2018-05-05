import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzxmah9xoP_Xl1Q9NDRWo45l6faOPCKeQ';

// Create a new component that should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
    
}

// Take this components generated HTML and put it on the page( in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));