import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'
import { WrapperHeader, WrapperHeaderLogo, WrapperHeaderAccount, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { SearchOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  return (
    <div style={{ backgroundColor: '#27408B', width: '100%' }}>
      <WrapperHeader>
        <Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <WrapperHeaderLogo style={{ fontSize: '24px', fontWeight: 'bold', paddingLeft: '10px' }}>MáyẢnh360</WrapperHeaderLogo>
          </Link>
        </Col>
        <Col span={12} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ButtonInputSearch
            placeholder="Tìm kiếm"
            size="large"
            icon={<SearchOutlined />}
            textButton="Tìm kiếm"
          />
        </Col>
        <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          {/* Đăng nhập/Đăng ký hoặc Tài khoản */}
          {!isLogin && (
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <WrapperHeaderAccount>
                <UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
                <div>
                  <WrapperTextHeader>Đăng nhập/Đăngký</WrapperTextHeader>
                </div>
              </WrapperHeaderAccount>
            </Link>
          )}
          {isLogin && (
            <div>
              <WrapperTextHeader>Tài khoản</WrapperTextHeader>
              <CaretDownOutlined style={{ fontSize: '12px', color: '#fff' }} />
            </div>
          )}
          {/* Giỏ hàng */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
            <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent