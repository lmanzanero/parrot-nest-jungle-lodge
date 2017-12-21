import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view"> 
                            <Link to="/"><img alt="logo" src="/images/logo.gif"/></Link> 
                        </div>
                    </li>
                    <div className="bottom-section">
                    <li><NavLink exact activeStyle={{fontWeight: 'bold', backgroundColor: '#CFC'}} activeClassName="selected" to="/">Home</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',backgroundColor: '#CFC'}} activeClassName="selected" to="/reservations">Reservations</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',backgroundColor: '#CFC'}} activeClassName="selected" to="/reviews">Reviews</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',backgroundColor: '#CFC'}} activeClassName="selected" to="/gallery">Gallery</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',backgroundColor: '#CFC'}} activeClassName="selected" to="/tours">Tours</NavLink></li> 
                    <li><NavLink exact activeStyle={{fontWeight: 'bold',backgroundColor: '#CFC'}} activeClassName="selected" to="/contacts">Contacts</NavLink></li>  
                    </div>
                 </ul>
            </div>
        );
    }
}

export default SideNav;