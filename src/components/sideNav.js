import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                                <div className="background">
                                <img src="/images/background.jpg"/>
                                </div>
                            <a href="#!user"><img className="circle" src="/images/logo.gif"/></a>
                            <a href="#!name"><span className="white-text name">John Doe</span></a>
                            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <div className="bottom-section">
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/reservations">Reservations</Link></li> 
                        <li><Link to="/reviews">Reviews</Link></li> 
                        <li><Link to="/gallery">Gallery</Link></li> 
                        <li><Link to="/tours">Tours</Link></li> 
                        <li><Link to="/contacts">Contacts</Link></li> 
                    </div>
                 </ul>
            </div>
        );
    }
}

export default SideNav;