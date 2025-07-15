import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct.jsx'
import { WrapperTypeProduct } from './style.js'
import SliderComponent from '../../components/SliderComponent/SliderComponent.jsx'
import Slider1 from '../../assets/images/Slider1.jpg'
import Slider2 from '../../assets/images/Slider2.jpg'
import Slider4 from '../../assets/images/Slider4.png'
import Slider5 from '../../assets/images/Slider5.png'

const Homepage = () => {
  const arr = ['máy ảnh', 'ống kính', 'phụ kiện', 'gimbal','máy quay']
  return (
    <>
    <div style={{padding: '0px 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return( <TypeProduct name={item} key={item}  />
          )
        })}
      </WrapperTypeProduct>
      <div id="container" style={{backgroundColor: '#F5F5F5', padding: '0px 120px'}}>
      <SliderComponent arrImage={[Slider1, Slider2, Slider4, Slider5]}/>
      </div>
      Homepage
    </div>
    </>
  ) 
}

export default Homepage
