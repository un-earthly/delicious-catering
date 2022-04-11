import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function MyCarousel() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} centerMode={true} autoFocus={true} transitionTime={800}>
            <div>
                <img src='https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1518619745898-93e765966dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80' />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}
