import React from 'react';
import { Link } from 'react-router-dom'

const Footer = ({}) => (
  <div>
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact us!</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Follow us</h5>
                <ul>
                  <li><Link to="/" className="grey-text text-lighten-3" href="#!">Facebook</Link></li>
                  <li><Link to="/" className="grey-text text-lighten-3" href="#!">Instagram</Link></li>
                  <li><Link to="/" className="grey-text text-lighten-3" href="#!">Trip Advisor</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
    </footer>
  </div>
);

export default Footer;
