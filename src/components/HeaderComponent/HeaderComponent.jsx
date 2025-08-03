import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Badge } from 'antd'
import { WrapperHeader, WrapperHeaderLogo, WrapperHeaderAccount, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../../assets/images/Logo.webp'

const HeaderComponent = () => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  return (
    <div style={{ backgroundColor: '   #3689b3 ', width: '100%' }}>
      <WrapperHeader>
        <Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="Logo" style={{ height: '70px', paddingLeft: '10px', objectFit: 'contain' }} />
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
        
          {/* Đăng nhập/Đăng*/}
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
            <Badge count={4} size="small">
            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
          </div>
          
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent