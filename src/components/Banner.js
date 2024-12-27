import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import libros from '../data';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {libros.map((libro) => (
          <div key={libro.id} className="banner__slide">
            <img src={libro.imagen} alt={libro.titulo} className="banner__imagen" />
            <h2 className="banner__titulo">{libro.titulo}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;