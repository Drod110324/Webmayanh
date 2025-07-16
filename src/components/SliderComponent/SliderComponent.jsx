import React from 'react'
import Slider from "react-slick";
import { Image } from 'antd';

const SliderComponent = ({arrImage}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Slider style={{ width: '80%' }} {...settings}>
          {arrImage.map((image) => {
              return (
                  <Image src={image} alt="slider" preview={false} width='100%' height='100%' style={{ margin: '0 auto', display: 'block' }} />
              )
          })}
      </Slider>
    </div>
  )
}

export default SliderComponent
