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
        <BrowserRouter basename="/parrot-nest-jungle-lodge">
          <div className="App">
              <Header/>
              <Route exact path="/"  component={Home}/>
              <Route path="/cabins"  component={Cabins}/>
              <Route path="/reviews"  component={Reviews}/>
              <Route path="/contacts"  component={Contacts}/>
              <Route path="/reservations"  component={Reservations}/>
              <Route path="/gallery"  component={Gallery}/>
              <Route path="/tours"  component={Tours}/>
              <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
