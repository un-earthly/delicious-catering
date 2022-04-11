import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function MyCarousel() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} centerMode={true} autoFocus={true}>
            <div>
                <img src />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}
