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
      <WrapperTypeProduct>
        {arr.map((item) => {
          return( <TypeProduct name={item} key={item}  />
          )
        })}
      </WrapperTypeProduct>
      <div style={{backgroundColor: '#F5F5F5', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)'}}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <SliderComponent arrImage={[Slider1, Slider2, Slider4, Slider5]}/>
        </div>
      </div>
      <div>
        Homepage
      </div>
    </>
  ) 
}

export default Homepage
