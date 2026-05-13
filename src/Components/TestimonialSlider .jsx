import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// const testimonials = [
//   {
//     name: 'DANIEL FRANKIE',
//     role: 'Manager',
//     image: 'assets/images/speakers/1.jpg',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
//   },
//   {
//     name: 'EMANUEL KELTON',
//     role: 'Planner',
//     image: 'assets/images/speakers/4.jpg',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
//   },
//   {
//     name: 'ROYLOR HENK',
//     role: 'Director',
//     image: 'assets/images/speakers/2.JPG',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
//   }
// ];
const testimonials = [
  {
    name: "Michael Thompson",
    role: "Senior Event Strategist",
    image: "assets/images/speakers/3.jpg",
    text: "Transformed our entire business model - the summit is where FinTech meets real innovation.",
  },
  {
    name: "Sophia Martinez",
    role: "Corporate Planner",
    image: "assets/images/speakers/1.jpg",
    text: "A game-changing experience! The insights reshaped our approach to digital finance.",
  },
  {
    name: "David Williams",
    role: "Director of Operations",
    image: "assets/images/speakers/4.JPG",
    text: "The perfect blend of Forex, payments, and future-tech. Truly world-class speakers!",
  },
  {
    name: "Emily Carter",
    role: "Event Coordination Lead",
    image: "assets/images/speakers/2.JPG",
    text: "Exceptional networking! Met partners who became core to our growth strategy.",
  },
  {
    name: "Christopher Allen",
    role: "Business Development Manager",
    image: "assets/images/speakers/3.JPG",
    text: "A powerhouse event - every session delivered practical, future-ready value.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // tablets & below
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider testimonial-slide">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-1">
            {" "}
            {/* ← adds horizontal gap */}
            <div className="box1 mx-4 p-6 rounded bg-white" key={index}>
              <div className="testimonial-content position-relative">
                <i
                  className="fa fa-quote-left position-absolute"
                  aria-hidden="true"
                ></i>
                <p className="my-6 position-relative w-md-75 ms-6">
                  {item.text}
                </p>
              </div>
              {/* <div className="testimonial-bio d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="bio-img me-5 rounded-circle float-start"
                  width={60}
                />
                <div>
                  <p className="mb-1 fw-semibold black">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
      <div className="col-12 my-5">
        <div className="speaker-button text-lg-center">
          <Link to="/Bloglists" className="btn">
            See More Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
