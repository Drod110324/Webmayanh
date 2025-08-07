import React from 'react'
import { Row, Col, Image, Button, InputNumber } from 'antd'
import Fujifilm from '../../assets/images/Fujifilm.jpeg'
import fujsmall from '../../assets/images/fujifilmsmall.jpg'
import { WrapperStyleSmallImage, WrapperStyleColImage, WrapperStyledNameProduct, WrapperPriceProduct, WrapperTextPriceProduct, WrapperStyledTextSell, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber, WrapperBtnQualityProduct } from './style'
import { StarFilled,MinusOutlined, PlusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ProductDetailComponent = () => {
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <Row style={{height: '100%', padding: `10px 16px`}}>
       <Col span={10} style={{borderRight: '1px solid rgb(235, 237, 240)', paddingRight: '8px', borderRadius: '8px'}}>
       <Image src={Fujifilm} alt="image product" preview={false} />
       <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
        <WrapperStyleColImage span={4}>
        <WrapperStyleSmallImage src={fujsmall} alt="image small" preview={false} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </WrapperStyleColImage>
        <WrapperStyleColImage span={4}>
        <WrapperStyleSmallImage src={fujsmall} alt="image small" preview={false} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </WrapperStyleColImage>
        <WrapperStyleColImage span={4}>
        <WrapperStyleSmallImage src={fujsmall} alt="image small" preview={false} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </WrapperStyleColImage><WrapperStyleColImage span={4}>
        <WrapperStyleSmallImage src={fujsmall} alt="image small" preview={false} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </WrapperStyleColImage><WrapperStyleColImage span={4}>
        <WrapperStyleSmallImage src={fujsmall} alt="image small" preview={false} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </WrapperStyleColImage>
       </Row>
       </Col>
       <Col span={14} style={{paddingLeft: '10px'}}>
       <WrapperStyledNameProduct>Fujifilm X-T4</WrapperStyledNameProduct>
       <div style={{display: 'flex', alignItems: 'center'}}>
       <StarFilled style={{color: '#faad14', fontSize: '12px'}} />
       <StarFilled style={{color: '#faad14', fontSize: '12px'}} />
       <StarFilled style={{color: '#faad14', fontSize: '12px'}} />
       <StarFilled style={{color: '#faad14', fontSize: '12px'}} />
       <WrapperStyledTextSell>| Đã bán 1k+</WrapperStyledTextSell>
        </div>
        <WrapperPriceProduct>
        <WrapperTextPriceProduct>21.299.000đ</WrapperTextPriceProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
         <span>Giao đến </span>
         <span className='address-product'>Hà Nội</span> - 
         <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{margin: '10px 0 20px 0',padding: '10px 0', borderTop: '1px solid rgb(235, 237, 240)', borderBottom: '1px solid rgb(235, 237, 240)'}}>
          <div style={{marginBottom: '10px'}}>Số lượng</div>
            <button style={{border: 'none', background: 'transparent'}}>
            <MinusOutlined style={{color: 'black'}} />
            </button>
            <WrapperInputNumber defaultValue={3} onChange={onChange} />
            <button style={{border: 'none', background: 'transparent'}}>
            <PlusOutlined style={{color: 'black'}} />
            </button>
        </div>
          <div style={{paddingTop: '10px', display: 'flex', gap: '10px', alignItems: 'center'}}>
            <ButtonComponent 
              size={40} 
              styleButton={{
                  height: '48px',
                  width: '220px',
                  borderRadius: '4px',
                  border: 'none',
                  background: 'rgb(255, 57, 69)',
                  fontSize: '15px',
                  fontWeight: '700'
              }}
              textButton='Chọn mua'
              StyleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
            />
            <ButtonComponent 
              size={40} 
              styleButton={{
                  height: '48px',
                  width: '220px',
                  borderRadius: '4px',
                  border: '1px solid rgb(0, 89, 255)',
                  background: '#fff',
                  fontSize: '15px',
                  fontWeight: '700'
              }}
              textButton='Mua trả sau góp 0%'
              StyleTextButton={{color: 'rgb(0, 89, 255)', fontSize: '15px', fontWeight: '700'}}
            />
          </div>
       </Col>
       
    </Row>
  )
}

export default ProductDetailComponent
