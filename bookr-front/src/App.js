import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { LoginView, BookListView, BookView, AddBookView } from './views'
import NavBar from './views/NavView'
import Jumbo from './components/Jumbo'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path = "/home" component={NavBar}/>
          <Route exact path = "/home" component={Jumbo}/>
          <Route exact path ="/" component={LoginView} />
          <Route exact path = '/home' component={BookListView} />
          <Route path = '/home/bookview/:id' component={BookView}/>
          <Route path = '/home/addbook' component={AddBookView} />
      </div>
    );
  }
}

export default App;
