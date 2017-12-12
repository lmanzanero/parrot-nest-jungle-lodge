import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Header from './components/header.js';
import Home from './components/home.js';
import Footer from './components/footer.js';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
          <header className="App-header">
                <Header/>
              </header>
              <Route exact path="/"  component={Home}/>
              <Route exact path="/cabins"  component={Footer}/>
              <Route exact path="/reviews"  component={Footer}/>
              <Route exact path="/contact"  component={Home}/>
              <Route exact path="/reservation"  component={Home}/>
              <Route exact path="/gallery"  component={Home}/>
              <Route exact path="/tours"  component={Home}/>
              <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
