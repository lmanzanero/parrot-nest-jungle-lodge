import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
  <div>
      <footer className="page-footer"> 
            <h4 className="header center teal-text text-lighten-4">See us in these great tour Books</h4>
            <div className="row">
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/tripadvisor.svg"/></a></div> 
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/frommers.jpg"/></a></div>
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/belizefirst.jpg"/></a></div>
            </div> 
            <div className="row">
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/fodors.jpg"/></a></div> 
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/moon.jpg"/></a></div>
               <div className="col s12 m4 l4"><a href="#!"><img alt="tripadvisor" src="/images/gallery/lonely.jpg"/></a></div>
            </div>
            <div className="row books">
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/frommers.jpg"/></a></div> 
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/frommers.jpg"/></a></div>
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/moonbook.jpg"/></a></div>
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/belize.jpg"/></a></div> 
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/rough.jpg"/></a></div> 
               <div className="col s6 m2 l2"><a href="#!"><img alt="tripadvisor" src="/images/gallery/pocket.jpg"/></a></div> 
            </div>

          <div className="footer-copyright">
            <div className="container">
            © 2018 Parrot Nest Junge Lodge
            <a className="grey-text text-lighten-4 right" href="#!">Made with love by Luis</a>
            </div>
          </div>
    </footer>
  </div>
);

export default Footer;
