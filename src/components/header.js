import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div>
        <nav>
           <div className="nav-fixed">
             <Link to="/" className="brand-logo center"><img alt="logo" src="/images/logo.gif"/></Link>
              <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
             <ul className="left hide-on-med-and-down">
                 <li className="fixedNav"><Link to="/">Home</Link></li>
                 <li className="fixedNav"><Link to="/cabins">Cabins</Link></li>
                 <li className="fixedNav"><Link to="/reviews">Reviews</Link></li>
                 <li className="fixedNav"><Link to="/contact">Contact</Link></li>
             </ul>
             <ul className="side-nav" id="mobile-demo">
             <li className="active"><Link to="/"><img alt="logo" src="/images/logo.gif"/></Link></li>
             <li className="active"><Link to="/">Home <i className="material-icons">home</i></Link></li>
             <li><Link to="/cabins">Cabins <i className="material-icons">local_hotel</i></Link></li>
             <li><Link to="/reviews">Reviews <i className="material-icons">rate_review</i></Link></li>
             <li><Link to="/contact">Contact <i className="material-icons">phone</i></Link></li>
            </ul>
           </div>
         </nav>
    </div>
    );
  }

}

export default Header;
