import React from 'react';
import './index';
import {Search} from './components/Search/Search'
import {Navigation} from './components/Navigation/Navigation'

// const API_CATEGORY_URL = '/news/category/:category';

// const API_LATEST_URL = 'https://api.canillitapp.com/latest/:yyyy-mm-dd'

// const API_SEARCH_URL = '/search/:palabra';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Search />
        </header>
        <main>
          <Navigation />
        </main>
      </div>
    );
  }
}

export default App;
