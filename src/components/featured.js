import Slider from 'react-slick';
import React, { Component } from 'react';

 
class Featured extends Component {

  render() {
    return (  
            <div className="slider">
                <ul className="slides">
                <li>
                    <img alt="sliderimgs" src="/images/slider/1.jpg"/> 
                    <div className="caption center-align">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img alt="sliderimgs" src="/images/slider/2.jpg"/> 
                    <div className="caption left-align">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img alt="sliderimgs" src="/images/slider/3.jpg"/> 
                    <div className="caption right-align">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img alt="sliderimgs" src="/images/slider/4.jpg"/> 
                    <div className="caption center-align">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                </ul>
            </div>   
    );
  }

}

export default Featured;
