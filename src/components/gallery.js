import React, { Component } from 'react';  
import { MediaBox } from 'react-materialize';
 
 
class Gallery extends Component {
  

    render() {
        return (
          <div className="flex-container" >
                <MediaBox src="/images/gallery/1.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/2.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/3.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/4.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/5.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/6.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/7.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/8.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/9.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/10.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/11.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/12.jpg" caption="A demo media box1" width="300"/>
                <MediaBox src="/images/gallery/13.jpg" caption="A demo media box1" width="300"/>
         </div>
        );
    }
}

export default Gallery;