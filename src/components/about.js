import React, { Component } from 'react';
import { Parallax, Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Map from './map';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div>
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">About Us</h1>
                        <div className="row center">
                        <p className="header col s12 light">The Parrot Nest Lodge is a truly unique tropical experience. Spending the night under a 100 foot guanacaste tree in a tree house is like nothing else! The lodge is surrounded on three sides by the Mopan River, so a refreshing swim in clear water is never far away and the wildlife of the area abound. Yes, parrots and toucans are in great number here, along with hundreds of other types of birds, making this an ideal location for bird watching. Coati, agouti, otter, and the giant green iguana are among the many animals which are regular visitors to our beautiful gardens which, though lush and exotic, are virtually mosquito free, a real bonus for those who love the great outdoors - and a good night's sleep.</p>
                        </div>
                        <div className="row center">
                        <Link to="/tours"   className="btn-large waves-effect waves-light teal lighten-1">For a list of tours, including our free tubing adventure, just click here
</Link>
                        </div>
                        <br></br>

                    </div>
                    </div> 
                </div>
                <Parallax imageSrc="/images/gallery/14.jpg"/>
                <div >
                
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">Our Location</h1>
                        <div className="row center">
                        <p className="header col s12 light">Bullet Tree Falls village, just 3 miles from the Cayo district's main town of San Ignacio, is the last outpost before the great forests to the west, south, and north. Though Spanish-speaking, everyone also speaks English. Located just outside the village, Parrot Nest consists of two tree houses and seven cabins, some with private bathrooms and others sharing two bathhouses. Children are welcome. Breakfast and dinner are served on the verandah of the main house. Dinners are generous, healthy, and fresh, and meals for vegetarians are provided on request. Clean drinking water is always available.</p>
                        </div>
                        <div className="row center">
                        <a href="https://www.scoop.it/t/best-of-san-ignacio-cayo" rel="noopener noreferrer" target="_blank"  className="btn-large waves-effect waves-light teal lighten-1">For the local Best Of Cayo website just click here</a>
                        </div>
                        <br></br>

                    </div>
                    </div>
                    
                </div>
                <Parallax imageSrc="/images/background.jpg"/>
                <div >
                
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">Your stay</h1>
                        <div className="row center">
                        <p className="header col s12 light">Parrot Nest is an ideal home base for your explorations of this fascinating district with its rivers (including falls and cascades), caves, archeological sites, jungle walks, medicine trails, butterfly farms and many more attractions. High adventure at a low price is our motto here, and peaceful relaxation is provided free of charge.	</p>
                        </div>
                        <div className="row center">
                        <Link to="/gallery"   className="btn-large waves-effect waves-light teal lighten-1">For more pictures of the PARROT NEST LODGE just click here</Link>
                        </div>
                        <br></br>

                    </div>
                    </div>
                    
                </div>
                <Parallax imageSrc="/images/gallery/15.jpg"/>
                <div >
                
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">Close Promiximity</h1>
                        <div className="row center">
                        <p className="header col s12 light">It's very easy and inexpensive to get around San Ignacio, making getting to the Nest quite simple. Buses to and from Belize City run frequently every day(usually every half hour), and drop you off in downtown San Ignacio. For a smoother ride that's door to door, a private shuttle is the way to go, and it only takes 2 hours(it costs between$35u and $65u pp). From San Ignacio, the best taxi rates are with the Bullet Tree Collectivo Taxis($1us pp to the village; $2.50 pp to the lodge) which can be found directly across the street from the entrance of Belize Bank. When heading into town for supplies, we glady drop people off in town.</p>
                        </div>
                        <div className="row center">
                        <Modal
                            header='Near by locations' 
                            bottomSheet
                            trigger={<Button className="btn-large waves-effect waves-light teal lighten-1" >For a map of Bullet Tree, just click here</Button>}>
                            <Map/>
                        </Modal>
                        </div>
                        <br></br>

                    </div>
                    </div>
                    
                </div>
                <Parallax imageSrc="/images/gallery/16.jpg"/>
                <div >
                
                    <div className="section no-pad-bot">
                    <div className="container">
                        <br></br>
                        <h1 className="header center teal-text text-lighten-2">No luxury</h1>
                        <div className="row center">
                        <p className="header col s12 light">We are not a luxury resort, as you can tell! We are a family owned and operated business, and we moved to Belize for the way of life. Marcus teaches at Sacred Heart, Theo manages the lodge, and the kids do whatever they want. We don't like being nickled and dimed when on vacation, so tube rides anytime, no problem and no charge. Life as it should be. See you in paradise!</p>
                        </div>
                        <div className="row center"> 
                        </div>
                        <br></br>

                    </div>
                    </div>    
                </div>     
            </div>
        );
    }
}

export default About;