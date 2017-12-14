import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">About Us</h1>
                        <div className="row center">
                        <p className="header col s12 light">TParrot Nest Lodge is a truly unique tropical experience. Spending the night under a 100 foot guanacaste tree in a tree house is like nothing else! The lodge is surrounded on three sides by the Mopan River, so a refreshing swim in clear water is never far away and the wildlife of the area abound. Yes, parrots and toucans are in great number here, along with hundreds of other types of birds, making this an ideal location for bird watching. Coati, agouti, otter, and the giant green iguana are among the many animals which are regular visitors to our beautiful gardens which, though lush and exotic, are virtually mosquito free, a real bonus for those who love the great outdoors - and a good night's sleep.</p>
                        </div>
                        <div className="row center">
                        <a href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Learn more from our Reviews!</a>
                        </div>
                        <br></br>

                    </div>
                    </div>
                    <div className="parallax"><img src="/images/gallery/14.jpg" alt="Unsplashed"/></div>
                </div>


                <div className="container about">
                    <div className="section">
 
                    <div className="row">
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">Speeds up development</h5>

                            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">User Experience Focused</h5>

                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">Easy to work with</h5>

                            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                    </div>
                    </div>
                    <div className="parallax"><img src="/images/background.jpg" alt="Unsplashed /images/backgroundimg 2"/></div>
                </div>

                <div className="container">
                    <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>Contact Us</h4>
                        <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>

                    </div>
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                    </div>
                    </div>
                    <div className="parallax"><img src="/images/background.jpg" alt="Unsplashed /images/backgroundimg 3"/></div>
                </div>
            </div>
        );
    }
}

export default About;