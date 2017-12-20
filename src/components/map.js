import React, { Component } from 'react';

const Map = () => {
        return (
            <div className="row">
                <iframe
                width="100%"
                height="450"
                frameBorder="0" style={{border:0}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBW5IcDVY_SQ5m5KpCWIAhm7sR-RipDRc&q=parrot.nest,belize" allowFullScreen>
                </iframe>
             </div>
        );
}

export default Map;