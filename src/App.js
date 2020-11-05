import React from 'react';
import './index';
import {Search} from './components/Search/Search'
import {Navigation} from './components/Navigation/Navigation'
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <Search />
        </header>
        <main>
          <Navigation />
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
