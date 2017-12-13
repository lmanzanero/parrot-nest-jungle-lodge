import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Cabins from './components/cabins';
import Reviews from './components/reviews';
import Contacts from './components/contacts';
import Reservations from './components/reservations';
import Gallery from './components/gallery';
import Tours from './components/tours';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header/>
              <Route exact path="/"  component={Home}/>
              <Route exact path="/cabins"  component={Cabins}/>
              <Route exact path="/reviews"  component={Reviews}/>
              <Route exact path="/contacts"  component={Contacts}/>
              <Route exact path="/reservations"  component={Reservations}/>
              <Route exact path="/gallery"  component={Gallery}/>
              <Route exact path="/tours"  component={Tours}/>
              <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
