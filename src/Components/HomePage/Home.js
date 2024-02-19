
import React, { useEffect, useState } from 'react'

import Image1 from '../Assets/Image1.jpg.webp'
import Image2 from '../Assets/Image2.jpg.webp'
import Image3 from '../Assets/Image3.jpg.webp'
import Image4 from '../Assets/Image4.jpg.webp'
import Image5 from '../Assets/Image5.jpg.webp'
import Image6 from '../Assets/Image6.jpg.webp'
import Image7 from '../Assets/Image7.jpg.webp'
import Image8 from '../Assets/Image8.jpg.webp'

import '../HomePage/Home.css'

const Home=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
             ];

     useEffect(() => {
                const interval = setInterval(() => {
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                }, 2000);
            
             return () => clearInterval(interval);
              }, [images.length]);
            

    return(
        <div>
               <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((images, index) => (
            <img key={index} src={images} alt={`Image ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>

        </div>
    )
};

export default Home;