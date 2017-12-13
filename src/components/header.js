import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div>
      <div className="navbar-fixed scrollspy" id="#home" >
          <nav>
            <div className="nav-wrapper ">
            <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#cards1">Cards</a></li>
                  <li><a  href="#form1">Contact1</a></li>
                  
                </ul> 
              </div>
            </nav>
        </div>
        <ul id="slide-out" className="side-nav">
              <li><div className="user-view">
                <div className="background"> 
                </div>
                <a href="#!user"> </a>
                <a href="#!name"><span className="white-text name">John Doe</span></a>
                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div></li>
              <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
              <li><a href="#!">Second Link</a></li>
              <li><div className="divider"></div></li>
              <li><a className="subheader">Subheader</a></li>
              <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
        </div>
    );
  }

}

export default Header;
