import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Input } from 'antd'
import { WrapperHeader, WrapperHeaderLogo, WrapperHeaderAccount, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <WrapperHeader>
      <Col span={6}>
      <WrapperHeaderLogo>MáyẢnh360</WrapperHeaderLogo>
      </Col>
      <Col span={12}>
      <Input.Search 
      placeholder="Tìm kiếm" 
      enterButton="Search" 
      size="large" loading />
      </Col>
      <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
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
      <div>
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
        <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
      </div>
      </Col>
    </WrapperHeader>
  )
}

export default HeaderComponent