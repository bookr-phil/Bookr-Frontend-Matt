import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { LoginView, BookListView } from './views'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path ="/login" component={LoginView} />
          <Route path = '/' component={BookListView} />
      </div>
    );
  }
}

export default App;
