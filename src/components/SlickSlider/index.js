import React from "react";
import Slider from "react-slick";

export default function SlickSlider({
  className,
  dots,
  arrows,
  infinite,
  slidesToShow,
  slidesToShowLaptop,
  slidesToShowTablet,
  slidesToShowMobile,
  slidesToScroll,
  slidesToScrollLaptop,
  slidesToScrollTablet,
  slidesToScrollMobile,
  children,
}) {
  const settings = {
    dots: dots ? dots : true,
    arrows: arrows ? arrows : false,
    infinite: infinite ? infinite : true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowLaptop,
          slidesToScroll: slidesToScrollLaptop,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: slidesToShowTablet,
          slidesToScroll: slidesToScrollTablet,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShowMobile,
          slidesToScroll: slidesToScrollMobile,
        },
      },
    ],
  };

  return (
    <Slider className={className ? className : ""} {...settings}>
      {children}
    </Slider>
  );
}
