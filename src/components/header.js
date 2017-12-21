import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
              <a  data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                  <div className={this.state.isToggleOn ? 'brand-logo' : 'brand-logo-small'}> <img alt="logo" className="responsive-img center-align" src="/images/logo.gif"/></div>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/">Home</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/reservations">Reservations</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/reviews">Reviews</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/gallery">Gallery</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/tours">Tours</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',color: '#CFC'}} activeClassName="selected" to="/contacts">Contacts</NavLink></li> 
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
