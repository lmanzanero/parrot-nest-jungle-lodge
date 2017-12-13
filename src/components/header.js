import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SideNav from './sideNav';



class Header extends Component {
  constructor(props){
    super(props); 
    this.state = {isToggleOn: true};
 
    this.handleScroll = this.handleScroll.bind(this);
    
  }
   
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
    // console.log('Top of nav is: ',  topOfNav);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll() {
    // console.log('the scroll things', window.scrollY);
     
    if(window.scrollY >= 150){
      this.setState({isToggleOn: false});
    } else {
      this.setState({isToggleOn: true});
    }
     
  };

  render() {
    return (
      <div className={this.state.isToggleOn ? 'mainHeader' : 'mainHeader trick'}>
      
          <div className={this.state.isToggleOn ? 'preHeader' : 'preHeader hidden'}><h1>Parrot's Nest Jungle Lodge</h1></div>
            <div className={this.state.isToggleOn ? 'navbar-wrapper scrollspy' : 'navbar-fixed scrollspy'} id="#home" >
            <nav className={this.state.isToggleOn ? '' : 'trans'}>
              <div className="nav-wrapper">
              <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                  <a href="#" className={this.state.isToggleOn ? 'brand-logo' : 'brand-logo-small'}> <img className="responsive-img circle" src="/images/logo.gif"/></a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/reservations">Reservations</Link></li> 
                    <li><Link to="/reviews">Reviews</Link></li> 
                    <li><Link to="/gallery">Gallery</Link></li> 
                    <li><Link to="/tours">Tours</Link></li> 
                    <li><Link to="/contacts">Contacts</Link></li> 
                  </ul> 
                </div>
              </nav>
          </div>
           <SideNav/>
        </div>
    );
  }

}

export default Header;
