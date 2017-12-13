import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import Featured  from './featured';
import About from './about';


 class Home extends Component {

   render() {
     return (
        <div className="home">
           <Featured/> 
           <About/>
        </div>
     );
   }

 }

 export default Home;
