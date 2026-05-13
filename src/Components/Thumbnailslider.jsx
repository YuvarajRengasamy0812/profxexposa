import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const images = [
    { src: "assets/images/product/4.jpg", alt: "Lewis Shirt" },
    { src: "assets/images/product/5.jpg", alt: "London T-shirt" },
    { src: "assets/images/product/2.jpg", alt: "Ladies Top" },
    { src: "assets/images/product/6.jpg", alt: "Yellow Sofa" },
  ];

  return (
    <div className="">
      <Slider
        asNavFor={nav2}
        ref={(slider) => setNav1(slider)}
        className="slider slider-for pb-1"
      >
        {images.map((img, index) => (
          <div key={index} className="product-img">
            <img
              src={img.src}
              alt={img.alt}
              className="w-100 rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider) => setNav2(slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slider slider-nav justify-content-md-center justify-content-start"
      >
        {images.map((img, index) => (
          <div key={index} className="product-img-nav me-1">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded opacity-50"
              style={{ cursor: "pointer", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
