import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
            <div className="container">
          <div className="section">

            <p className="caption">Have a question? Don't hesitate to send us a message. Our team will be happy to help you.</p>

            <div className="divider"></div>
            
            <div id="contact-page" className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <div id="map-canvas" data-lat="40.747688" data-lng="-74.004142"></div>
                </div>
                <div className="card-content">                    
                    <a className="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                        <i className="mdi-editor-mode-edit"></i>
                    </a>

                    <div className="row">
                      <div className="col s12 m6">
                        <form className="contact-form">
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="name" type="text"/>
                              <label  >Name</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="email" type="email"/>
                              <label  >Email</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="website" type="text"/>
                              <label  >Website</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea id="message" className="materialize-textarea"></textarea>
                              <label  >Message</label>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <button className="btn cyan waves-effect waves-light right" type="submit" name="action">Send
                                  <i className="mdi-content-send right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>                      
                      <div className="col s12 m6">
                        <ul className="collapsible collapsible-accordion" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header"><i className="mdi-communication-live-help"></i> FAQ</div>
                            <div className="collapsible-body" >
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                          </li>
                          <li className="active">
                            <div className="collapsible-header active"><i className="mdi-communication-email"></i> Need Help?</div>
                            <div className="collapsible-body"  >
                              <p>We welcome your inquiries at the email address <a mailto="support@geekslabs.com">support@geekslabs.com</a>.We will get in touch with you soon.</p>
                              <p>As a creative studio we believe no client is too big nor too small to work with us to obtain good advantage.By combining the creativity of artists with the precision of engineers we develop custom solutions that achieve results. <a href="http://themeforest.net/user/geekslabs/portfolio" target="_blank">See our work.</a></p>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header"><i className="mdi-editor-insert-emoticon"></i> Testimonial</div>
                            <div className="collapsible-body">
                              <blockquote>Fantastic product, my sites all run super fast and the support is excellent!<br/>The website you designed helped a lot! </blockquote>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

            </div>
        );
    }
}

export default Contacts;