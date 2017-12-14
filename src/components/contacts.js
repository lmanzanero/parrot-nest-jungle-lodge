import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
          <div>
          <div className="row">
              <div className="col s12 m3 hoverable contact-boxes">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons md-48 hoverable">email</i></h2>
                  <h5 className="center">EMAIL - The best way to contact us!</h5>

                  <ol > 
                    <li><div>Our email address is parrotnestlodge@gmail.com</div></li>
                    <li><div>Due to intermittent web outages, it might take a few days to reply</div></li>
                    <li><div>Please make the subject: "Parrot Nest Reservations" </div></li>
                    <li><div><a href="#!">parrotnestlodge@gmail.com </a></div></li>
                  </ol>
                </div>
              </div>

              <div className="col s12 m3 hoverable contact-boxes">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons md-48 hoverable">contact_phone</i></h2>
                  <h5 className="center">PHONE - when services are up.</h5>
                  <ol  > 
                    <li><div>Dial the code for Central America (011 in North America</div></li>
                    <li><div>Then dial 501.669.6068 or</div></li>
                    <li><div>you can try 501.660.6336. </div></li> 
                  </ol>
                </div>
              </div>

              <div className="col s12 m3 hoverable contact-boxes">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons md-48 hoverable">contact_mail</i></h2>
                  <h5 className="center">SNAIL MAIL</h5>
                  <br/>
                  <ol > 
                    <li><div>Parrot Nest Lodge </div></li>
                    <li><div>P.O. Box 108</div></li>
                    <li><div>San Ignacio, Cayo </div></li>
                    <li><div>Belize, Central America</div></li>
                  </ol>
                </div>
              </div>

              <div className="col s12 m3 hoverable contact-boxes">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons md-48 hoverable">smoking_rooms</i></h2>
                  <h5 className="center">SMOKE SIGNALS</h5>
                  <br/>
                  <ol > 
                    <li><div>When all else fails, haha </div></li>
                  </ol>
                </div>
             </div>
        </div>
        <div className="divider"></div>
             <div className="row">
                      Map 
             </div>
        </div>
        );
    }
}

export default Contacts;