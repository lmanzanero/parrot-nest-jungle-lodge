import React, { Component } from 'react';
import Fallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: '/images/gallery/1.jpg', width: 3, height: 2 },
    { src: '/images/gallery/2.jpg', width: 3, height: 2 },
    { src: '/images/gallery/3.jpg', width: 3, height: 2 },
    { src: '/images/gallery/4.jpg', width: 3, height: 2 },
    { src: '/images/gallery/5.jpg', width: 3, height: 2 },
    { src: '/images/gallery/6.jpg', width: 3, height: 2 },
    { src: '/images/gallery/7.jpg', width: 3, height: 2 },
    { src: '/images/gallery/8.jpg', width: 3, height: 2 },
    { src: '/images/gallery/9.jpg', width: 3, height: 2 }
  ];

class Gallery extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
    render() {
        return (
            <div >
                <Fallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
         </div>
        );
    }
}

export default Gallery;