import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ShopSlider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img className="slider-img" src="images/1.jpg" />
                </div>
                <div>
                    <img className="slider-img" src="images/2.jpg" />
                </div>
                <div>
                    <img className="slider-img" src="images/3.jpg" />
                </div>
            </Carousel>
        );
    }
}
export default ShopSlider