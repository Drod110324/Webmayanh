import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'
import { WrapperHeader, WrapperHeaderLogo, WrapperHeaderAccount, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { SearchOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <WrapperHeader>
      <Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
        <WrapperHeaderLogo style={{ fontSize: '24px', fontWeight: 'bold', paddingLeft: '10px' }}>MáyẢnh360</WrapperHeaderLogo>
      </Col>
      <Col span={12}>


      {/* Tìm kiếm */}
      <ButtonInputSearch 
      placeholder="Tìm kiếm"
       size="large" icon={<SearchOutlined />} 
       textButton="Tìm kiếm" />
      </Col>
      <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>

      {/* Đăng nhập/Đăng ký */}
      <WrapperHeaderAccount>
        <UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
        <div>
          <WrapperTextHeader>Đăng nhập/Đăngký</WrapperTextHeader>
          <div>
            <WrapperTextHeader>Tài khoản</WrapperTextHeader>
            <CaretDownOutlined style={{ fontSize: '12px', color: '#fff' }} />
            </div>
        </div>
      </WrapperHeaderAccount>

      {/* Giỏ hàng */}
      <div>
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
        <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
      </div>
      </Col>
    </WrapperHeader>
  )
}

export default HeaderComponent