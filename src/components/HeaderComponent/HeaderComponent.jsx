import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Badge, Card } from 'antd'
import { WrapperHeader, WrapperHeaderLogo, WrapperHeaderAccount, WrapperTextHeader } from './style'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { SearchOutlined } from '@ant-design/icons'
import Logo from '../../assets/images/Logo.webp'

const HeaderComponent = () => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  return (
    <Card 
      style={{ 
        width: '100%', 
        backgroundColor: 'rgb(26, 148, 255)', 
        border: 'none',
        borderRadius: '0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
      bodyStyle={{ padding: '5px 20px' }}
    >
      <WrapperHeader>
        <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="Logo" style={{ height: '70px', paddingLeft: '5px', objectFit: 'contain' }} />
          </Link>
        </Col>
        <Col span={14} style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '10px' }}>
          <ButtonInputSearch
            placeholder="Tìm kiếm"
            size="large"
            icon={<SearchOutlined />}
            textButton="Tìm kiếm"
          />
        </Col>
        <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
        
          {/* Đăng nhập/Đăng ký */}
          {!isLogin && (
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <WrapperHeaderAccount>
                <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
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
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Badge count={4} size="small">
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
          </div>
          </Link>
        </Col>
      </WrapperHeader>
    </Card>
  )
}

export default HeaderComponent