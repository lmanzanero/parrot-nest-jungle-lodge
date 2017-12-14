import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view"> 
                            <Link to="/"><img alt="logo" src="images/logo.gif"/></Link> 
                        </div>
                    </li>
                    <div className="bottom-section">
                        <li><Link to="/"><i className="material-icons">home</i>Home</Link></li> 
                        <li><Link to="/reservations"><i className="material-icons">bookmark</i>Reservations</Link></li> 
                        <li><Link to="/reviews"><i className="material-icons">rate_review</i>Reviews</Link></li> 
                        <li><Link to="/gallery"><i className="material-icons">photo_library</i>Gallery</Link></li> 
                        <li><Link to="/tours"><i className="material-icons">nature_people</i>Tours</Link></li> 
                        <li><Link to="/contacts"><i className="material-icons">contacts</i>Contacts</Link></li> 
                    </div>
                 </ul>
            </div>
        );
    }
}

export default SideNav;