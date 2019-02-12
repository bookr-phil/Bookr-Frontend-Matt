import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { LoginView, BookListView, BookView } from './views'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path ="/login" component={LoginView} />
          <Route exact path = '/' component={BookListView} />
          <Route path = '/bookview/:id' component={BookView}/>
      </div>
    );
  }
}

export default App;
