 import React, { Component } from 'react';
 import { Slider, Slide } from 'react-materialize';

 
class Featured extends Component {

  render() {
    return (  
            <div className="mainSlider">
                <Slider indicators={false} interval={8000} >
                    <Slide
                        src="/images/slider/1.jpg"
                        title="Welcome to Jungle Paradise">
                        We are the most affordable Jungle Lodge in Belize
                    </Slide>
                    <Slide
                        src="/images/slider/2.jpg"
                        title="Let us help you experience Belize"
                        placement="left">
                        We promise a true Belize Jungle experience
                    </Slide>
                    <Slide
                        src="/images/slider/3.jpg"
                        title="We are no Luxury!"
                        placement="right">
                        but, we promise you will ENJOY!
                    </Slide>
                </Slider>
            </div>   
    );
  }

}

export default Featured;
