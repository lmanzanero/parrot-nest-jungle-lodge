 import React, { Component } from 'react';
 import { Slider, Slide } from 'react-materialize';

 
class Featured extends Component {

  render() {
    return (  
            <div className="mainSlider">
                <Slider indicators={false} interval={8000} >
                    <Slide
                        src="/images/slider/1.jpg"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="/images/slider/2.jpg"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="/images/slider/3.jpg"
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
            </div>   
    );
  }

}

export default Featured;
